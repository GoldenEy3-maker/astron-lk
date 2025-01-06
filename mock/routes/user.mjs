import express from "express";
import { authMiddleware } from "../middlwares.mjs";
import tokenService from "../services/token.service.mjs";
import mailService from "../services/mail.service.mjs";
import cacheService from "../services/cache.service.mjs";

const userRouter = express.Router();

userRouter.post("/sign-in", async (req, res) => {
  const { login, password, remember } = req.body;

  const user = req.users.find((user) => user.email === login);

  if (!user)
    return res.status(400).json({ message: "Неверный логин или пароль!" });

  if (user.password !== password)
    return res.status(400).json({ message: "Неверный логин или пароль!" });

  if (user.isBanned) return res.status(403).json({ message: "Вы забанены!" });

  const { accessToken, refreshToken } = await tokenService.generateTokens({
    ...user,
    remember,
  });

  tokenService.sendRefreshToken(res, refreshToken, remember);

  const { email, name, surname, patronymic, phone } = user;

  return res.json({
    accessToken,
    user: { email, name, surname, patronymic, phone },
  });
});

userRouter.get("/session/refresh", async (req, res) => {
  const reqRefreshToken = req.cookies.refresh;

  if (!reqRefreshToken)
    return res.status(401).json({ message: "Refresh token is invalid!" });

  const refreshTokenPayload = await tokenService.verifyRefreshToken(
    reqRefreshToken
  );

  if (!refreshTokenPayload)
    return res.status(401).json({ message: "Refresh token is invalid!" });

  const { id, tokenVersion, remember } = refreshTokenPayload;

  const user = req.users.find((user) => user.id === id);

  if (!user)
    return res.status(401).json({ message: "Refresh token is invalid!" });

  if (user.tokenVersion !== tokenVersion)
    return res.status(401).json({ message: "Refresh token is invalid!" });

  const { accessToken, refreshToken } = await tokenService.generateTokens({
    ...user,
    remember,
  });

  tokenService.sendRefreshToken(res, refreshToken, remember);

  return res.send({ accessToken });
});

userRouter.get("/session", authMiddleware, (req, res) => {
  const { email, name, surname, patronymic, phone } = req.user;
  return res.json({ email, name, surname, patronymic, phone });
});

userRouter.get("/company", authMiddleware, (req, res) => {
  const userId = req.user.id;
  const company = req.companies.find((company) => company.userId === userId);

  return res.json(company);
});

userRouter.get("/sign-out", authMiddleware, (req, res) => {
  res.clearCookie("refresh");

  return res.json({ message: "Успешно" });
});

userRouter.post("/password/send-link", async (req, res) => {
  const { email } = req.body;

  const user = req.users.find((user) => user.email === email);

  if (!user) return res.status(404).json({ message: "Пользователь не найден" });

  const { id } = user;

  const recoveryToken = await tokenService.generateRecoveryPasswordToken({
    id,
  });

  const recoveryLink = `http://localhost:5173/password/recovery/${recoveryToken}`;

  const isSent = await mailService.sendRecoveryPasswordLink(
    email,
    recoveryLink
  );

  if (!isSent)
    return res.status(500).json({ message: "Ошибка при отправке письма" });

  return res.json({ message: "Успешно" });
});

userRouter.post("/password/recovery", async (req, res) => {
  const { token, password } = req.body;

  const tokenPayload = await tokenService.verifyRecoveryPasswordToken(token);

  if (!tokenPayload)
    return res.status(403).json({
      message: "Время на восстановление пароля по этой ссылке истекло",
    });

  const { id } = tokenPayload;

  const user = req.users.find((user) => user.id === id);

  if (!user)
    return res
      .status(404)
      .json({ message: "Пользователь с таким ID токена не найден" });

  user.password = password;
  user.tokenVersion++;

  cacheService.updateCache(
    "users",
    req.users.map((u) => (u.id === id ? user : u))
  );

  return res.json({ message: "Успешно" });
});

export { userRouter };
