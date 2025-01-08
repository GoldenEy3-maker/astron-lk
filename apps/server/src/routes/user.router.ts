import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import tokenService from "../services/token.service";
import mailService from "../services/mail.service";
import cacheService from "../services/cache.service";

const userRouter = express.Router();

userRouter.post("/sign-in", async (req, res) => {
  const { login, password, remember } = req.body;

  const user = cacheService
    .getData("users")
    .find((user) => user.email === login);

  if (!user) {
    res.status(400).json({ message: "Неверный логин или пароль!" });
    return;
  }

  if (user.password !== password) {
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
});

userRouter.get("/session/refresh", async (req, res) => {
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

  const user = cacheService.getData("users").find((user) => user.id === id) as {
    id: string;
    email: string;
    name: string;
    surname: string;
    patronymic: string;
    phone: string;
    tokenVersion: number;
  };

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
});

userRouter.get("/session", authMiddleware, (req, res) => {
  const { email, name, surname, patronymic, phone } = req.user;
  res.json({ email, name, surname, patronymic, phone });
});

userRouter.get("/company", authMiddleware, (req, res) => {
  const userId = req.user.id;
  const company = cacheService
    .getData("companies")
    .find((company) => company.userId === userId);

  res.json(company);
});

userRouter.get("/sign-out", authMiddleware, (req, res) => {
  res.clearCookie("refresh");

  res.json({ message: "Успешно" });
});

userRouter.post("/password/send-link", async (req, res) => {
  const { email } = req.body;

  const user = cacheService
    .getData("users")
    .find((user) => user.email === email);

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
});

userRouter.post("/password/recovery", async (req, res) => {
  const { token, password } = req.body;

  const tokenPayload = await tokenService.verifyRecoveryPasswordToken(token);

  if (!tokenPayload) {
    res.status(403).json({
      message: "Время на восстановление пароля по этой ссылке истекло",
    });
    return;
  }

  const { id } = tokenPayload;

  const user = cacheService.getData("users").find((user) => user.id === id);

  if (!user) {
    res
      .status(404)
      .json({ message: "Пользователь с таким ID токена не найден" });
    return;
  }

  user.password = password;
  user.tokenVersion++;

  cacheService.updateCache(
    "users",
    cacheService.getData("users").map((u) => (u.id === id ? user : u))
  );

  res.json({ message: "Успешно" });
});

export { userRouter };
