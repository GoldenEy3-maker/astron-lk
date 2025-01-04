import express from "express";
import { authMiddleware } from "../middlwares.mjs";
import tokenService from "../services/token.service.mjs";

const userRouter = express.Router();

userRouter.post("/sign-in", async (req, res) => {
  // TODO: add remember handler
  const { login, password, remember } = req.body;

  const user = req.users.find((user) => user.email === login);

  if (!user)
    return res.status(400).json({ message: "Неверный логин или пароль!" });

  if (user.password !== password)
    return res.status(400).json({ message: "Неверный логин или пароль!" });

  if (user.isBanned) return res.status(403).json({ message: "Вы забанены!" });

  const { accessToken, refreshToken } = await tokenService.generateTokens(user);

  tokenService.sendRefreshToken(res, refreshToken);

  const { email, name, surname, patronymic } = user;

  return res.json({ accessToken, user: { email, name, surname, patronymic } });
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

  const user = req.users.find((user) => user.id === refreshTokenPayload.id);

  if (!user)
    return res.status(401).json({ message: "Refresh token is invalid!" });

  if (user.tokenVersion !== refreshTokenPayload.tokenVersion)
    return res.status(401).json({ message: "Refresh token is invalid!" });

  const { accessToken, refreshToken } = await tokenService.generateTokens(user);

  tokenService.sendRefreshToken(res, refreshToken);

  return res.send({ accessToken });
});

userRouter.get("/session", authMiddleware, (req, res) => {
  const { email, name, surname, patronymic } = req.user;
  return res.json({ email, name, surname, patronymic });
});

userRouter.get("/company", authMiddleware, (req, res) => {
  const userId = req.user.id;
  const company = req.companies.find((company) => company.userId === userId);

  return res.json(company);
});

export { userRouter };
