import { Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import tokenService from "../services/token.service";
import mailService from "../services/mail.service";
import dbService from "../services/db.service";
import passwordService from "../services/password.service";
import {
  Error,
  Favorite,
  Partner,
  PartnerCard,
  Session,
  Success,
} from "../types/globals";

const userRouter = Router();

userRouter.post(
  "/sign-in",
  async (
    req: Request,
    res: Response<{ accessToken: string; user: Session } | Error>
  ) => {
    const { login, password, remember } = req.body;

    const user = dbService.get("users").find((user) => user.email === login);

    if (!user) {
      res.status(400).json({ message: "Неверный логин или пароль!" });
      return;
    }

    if (!passwordService.verifyPassword(password, user.password)) {
      res.status(400).json({ message: "Неверный логин или пароль!" });
      return;
    }

    if (user.isBanned) {
      res.status(403).json({ message: "Вы забанены!" });
      return;
    }

    const { accessToken, refreshToken } = await tokenService.generateTokens({
      ...user,
      remember,
    });

    tokenService.sendRefreshToken(res, refreshToken, remember);

    const { email, name, surname, patronymic, phone, favorites, role } = user;

    res.json({
      accessToken,
      user: {
        role,
        email,
        name,
        surname,
        patronymic,
        phone,
        favorites,
        favoriteProjects: 10,
      },
    });
  }
);

userRouter.get(
  "/session/refresh",
  async (req: Request, res: Response<{ accessToken: string } | Error>) => {
    const reqRefreshToken = req.cookies.refresh;

    if (!reqRefreshToken) {
      res.status(401).json({ message: "Refresh token is invalid!" });
      return;
    }

    const refreshTokenPayload = await tokenService.verifyRefreshToken(
      reqRefreshToken
    );

    if (!refreshTokenPayload) {
      res.status(401).json({ message: "Refresh token is invalid!" });
      return;
    }

    const { id, tokenVersion, remember } = refreshTokenPayload;

    const user = dbService.get("users").find((user) => user.id === id);

    if (!user) {
      res.status(401).json({ message: "Refresh token is invalid!" });
      return;
    }

    if (user.tokenVersion !== tokenVersion) {
      res.status(401).json({ message: "Refresh token is invalid!" });
      return;
    }

    const { accessToken, refreshToken } = await tokenService.generateTokens({
      ...user,
      remember,
    });

    tokenService.sendRefreshToken(res, refreshToken, remember);

    res.send({ accessToken });
  }
);

userRouter.get(
  "/session",
  authMiddleware,
  (req: Request, res: Response<Session>) => {
    const { email, name, surname, patronymic, phone, favorites, role } =
      res.locals.user;
    res.json({
      role,
      email,
      name,
      surname,
      patronymic,
      phone,
      favorites,
      favoriteProjects: 10,
    });
  }
);

userRouter.get(
  "/sign-out",
  authMiddleware,
  (req: Request, res: Response<Success>) => {
    res.clearCookie("refresh");

    res.json({ message: "Успешно" });
  }
);

userRouter.post(
  "/password/change",
  authMiddleware,
  async (req: Request, res: Response<Success | Error>) => {
    const { password, newPassword } = req.body;

    const user = res.locals.user;

    if (!passwordService.verifyPassword(password, user.password)) {
      res.status(400).json({ message: "Введен неверный пароль!" });
      return;
    }

    if (passwordService.verifyPassword(newPassword, user.password)) {
      res.status(400).json({ message: "Новый пароль не может быть таким же!" });
      return;
    }

    const reqRefreshToken = req.cookies.refresh;

    if (!reqRefreshToken) {
      res.status(401).json({ message: "Пользователь не авторизован!" });
      return;
    }

    const refreshTokenPayload = await tokenService.verifyRefreshToken(
      reqRefreshToken
    );

    if (!refreshTokenPayload) {
      res.status(401).json({ message: "Пользователь не авторизован!" });
      return;
    }

    user.password = newPassword;
    user.tokenVersion++;

    dbService.update(
      "users",
      dbService.get("users").map((u) => (u.id === user.id ? user : u))
    );

    const { remember } = refreshTokenPayload;

    const { refreshToken } = await tokenService.generateTokens({
      ...user,
      remember,
    });

    tokenService.sendRefreshToken(res, refreshToken, remember);

    res.json({ message: "Ваш пароль успешно изменен" });
  }
);

userRouter.post(
  "/password/send-link",
  async (req: Request, res: Response<Success | Error>) => {
    const { email } = req.body;

    const user = dbService.get("users").find((user) => user.email === email);

    if (!user) {
      res.status(404).json({ message: "Пользователь не найден" });
      return;
    }

    const { id } = user;

    const recoveryToken = await tokenService.generateRecoveryPasswordToken({
      id,
    });

    const recoveryLinkURL = process.env.CLIENT_URL
      ? `https://${process.env.CLIENT_URL}`
      : "http://localhost:5173";

    const recoveryLink = `${recoveryLinkURL}/password/recovery/${recoveryToken}`;

    const isSent = await mailService.sendRecoveryPasswordLink(
      email,
      recoveryLink
    );

    if (!isSent) {
      res.status(500).json({ message: "Ошибка при отправке письма" });
      return;
    }

    res.json({
      message: "Ссылка на восстановление пароля отправлена на почту!",
    });
  }
);

userRouter.post(
  "/password/recovery",
  async (req: Request, res: Response<Success | Error>) => {
    const { token, password } = req.body;

    const tokenPayload = await tokenService.verifyRecoveryPasswordToken(token);

    if (!tokenPayload) {
      res.status(403).json({
        message: "Ссылка на восстановление пароля недействительна",
      });
      return;
    }

    const { id } = tokenPayload;

    const user = dbService.get("users").find((user) => user.id === id);

    if (!user) {
      res
        .status(404)
        .json({ message: "Пользователь с таким ID токена не найден" });
      return;
    }

    user.password = password;
    user.tokenVersion++;

    dbService.update(
      "users",
      dbService.get("users").map((u) => (u.id === id ? user : u))
    );

    res.json({ message: "Успешно" });
  }
);

userRouter.get(
  "/favorites",
  authMiddleware,
  (
    req: Request,
    res: Response<{
      data: Favorite[];
      nextPage: number;
      totalPages: number;
    }>
  ) => {
    const { page = "1", limit = "10" } = req.query as {
      page?: string;
      limit?: string;
    };
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = parseInt(page) * parseInt(limit);

    const userId = res.locals.user.id;
    const user = dbService.get("users").find((user) => user.id === userId);

    const favorites = user.favorites.map((id) => {
      const document = dbService
        .get("documents")
        .find((document) => document.id === id);
      const bulletin = dbService
        .get("bulletins")
        .find((bulletin) => bulletin.id === id);
      return document || bulletin;
    });

    const totalPages = Math.ceil(favorites.length / parseInt(limit));
    const currentPage = parseInt(page);
    const nextPage = currentPage + 1;

    res.json({
      data: favorites.slice(startIndex, endIndex),
      nextPage: nextPage <= totalPages ? nextPage : 0,
      totalPages,
    });
  }
);

userRouter.post(
  "/favorites/add",
  authMiddleware,
  (req: Request, res: Response<Success | Error>) => {
    const { id } = req.body;

    const document = dbService
      .get("documents")
      .find((document) => document.id === id);
    const bulletin = dbService
      .get("bulletins")
      .find((bulletin) => bulletin.id === id);

    if (!document && !bulletin) {
      res.status(404).json({ message: "Документ не найден" });
      return;
    }

    const userId = res.locals.user.id;
    const user = dbService.get("users").find((user) => user.id === userId);

    user.favorites = [id, ...user.favorites];

    dbService.update(
      "users",
      dbService.get("users").map((u) => (u.id === userId ? user : u))
    );
    res.json({ message: "Успешно" });
  }
);

userRouter.delete(
  "/favorites/remove",
  authMiddleware,
  (req: Request, res: Response<Success | Error>) => {
    const { id } = req.body;

    const document = dbService
      .get("documents")
      .find((document) => document.id === id);
    const bulletin = dbService
      .get("bulletins")
      .find((bulletin) => bulletin.id === id);

    if (!document && !bulletin) {
      res.status(404).json({ message: "Документ не найден" });
      return;
    }

    const userId = res.locals.user.id;
    const user = dbService.get("users").find((user) => user.id === userId);
    user.favorites = user.favorites.filter((favorite) => favorite !== id);
    dbService.update(
      "users",
      dbService.get("users").map((u) => (u.id === userId ? user : u))
    );
    res.json({ message: "Успешно" });
  }
);

export { userRouter };
