import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fs from "fs/promises";
import { newsRouter } from "./routes/news.mjs";
import { userRouter } from "./routes/user.mjs";
import { authMiddleware } from "./middlwares.mjs";

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
  await new Promise((res) => setTimeout(res, 400));
  next();
});

let cache = {
  users: [],
  news: [],
  companies: [],
};

async function loadUsers() {
  const data = await fs.readFile("mock/schemas/users.json");
  cache.users = JSON.parse(data);
}

async function loadNews() {
  const data = await fs.readFile("mock/schemas/news.json");
  cache.news = JSON.parse(data);
}

async function loadCompanies() {
  const data = await fs.readFile("mock/schemas/companies.json");
  cache.companies = JSON.parse(data);
}

async function dataLoaderMiddleware(req, res, next) {
  if (cache.users.length === 0) await loadUsers();
  if (cache.news.length === 0) await loadNews();
  if (cache.companies.length === 0) await loadCompanies();
  req.users = cache.users;
  req.news = cache.news;
  req.companies = cache.companies;
  next();
}

app.use(dataLoaderMiddleware);

app.use("/api/user", userRouter);

app.use("/api/news", newsRouter);

app.listen(PORT, () => {
  console.log(`Mock server start at ${PORT} port`);
});
