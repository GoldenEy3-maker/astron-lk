import express, { Request, Response } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import tokenService from "../services/token.service";
import mailService from "../services/mail.service";
import dbService from "../services/db.service";
import passwordService from "../services/password.service";
import { Company, Error, Session, Success } from "../types/globals";

const userRouter = express.Router();

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

    const { email, name, surname, patronymic, phone } = user;

    res.json({
      accessToken,
      user: { email, name, surname, patronymic, phone },
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
    const { email, name, surname, patronymic, phone } = res.locals.user;
    res.json({ email, name, surname, patronymic, phone });
  }
);

userRouter.get(
  "/company",
  authMiddleware,
  (req: Request, res: Response<Company>) => {
    const userId = res.locals.user.id;
    const company = dbService
      .get("companies")
      .find((company) => company.userId === userId);

    res.json(company);
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

    res.json({ message: "Успешно" });
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

    res.json({ message: "Успешно" });
  }
);

userRouter.post(
  "/password/recovery",
  async (req: Request, res: Response<Success | Error>) => {
    const { token, password } = req.body;

    const tokenPayload = await tokenService.verifyRecoveryPasswordToken(token);

    if (!tokenPayload) {
      res.status(403).json({
        message: "Время на восстановление пароля по этой ссылке истекло",
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

export { userRouter };
