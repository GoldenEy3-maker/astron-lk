import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { newsRouter } from "./routes/news.mjs";
import { userRouter } from "./routes/user.mjs";
import cacheService from "./services/cache.service.mjs";

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

async function dataLoaderMiddleware(req, res, next) {
  if (cacheService.getData().users.length === 0) {
    await cacheService.loadAll();
  }

  req.users = cacheService.getData().users;
  req.news = cacheService.getData().news;
  req.companies = cacheService.getData().companies;
  next();
}

app.use(dataLoaderMiddleware);

app.use("/api/user", userRouter);

app.use("/api/news", newsRouter);

app.listen(PORT, () => {
  console.log(`Mock server start at ${PORT} port`);
});
