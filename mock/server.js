import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fs from "fs/promises";
import tokenService from "./services/token.service.mjs";
import { newsRouter } from "./routes/news.mjs";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.static("mock/schemas"));

app.use(async (req, res, next) => {
  await new Promise((res) => setTimeout(res, 1000));
  next();
});

let cache = {
  users: [],
  news: [],
};

async function loadUsers() {
  const data = await fs.readFile("mock/schemas/users.json");
  cache.users = JSON.parse(data);
}

async function loadNews() {
  const data = await fs.readFile("mock/schemas/news.json");
  cache.news = JSON.parse(data);
}

async function dataLoaderMiddleware(req, res, next) {
  if (cache.users.length === 0) await loadUsers();
  if (cache.news.length === 0) await loadNews();
  req.users = cache.users;
  req.news = cache.news;
  next();
}

app.use(dataLoaderMiddleware);

async function authMiddleware(req, res, next) {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (String(accessToken) === "undefined")
    return res.status(401).json({ message: "Пользователь не авторизован!" });

  const accessTokenPayload = await tokenService.verifyAccessToken(accessToken);

  if (!accessTokenPayload)
    return res.status(401).json({ message: "Пользователь не авторизован!" });

  const user = req.users.find(
    (user) => user.email === accessTokenPayload.email
  );

  if (!user)
    return res.status(401).json({ message: "Пользователь не авторизован!" });

  req.user = user;

  next();
}

app.post("/api/sign-in", async (req, res) => {
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

app.get("/api/session/refresh", async (req, res) => {
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

app.get("/api/session", authMiddleware, (req, res) => {
  const { email, name, surname, patronymic } = req.user;
  return res.json({ email, name, surname, patronymic });
});

app.use("/api/news", authMiddleware, newsRouter);

app.listen(PORT, () => {
  console.log(`Mock server start at ${PORT} port`);
});
