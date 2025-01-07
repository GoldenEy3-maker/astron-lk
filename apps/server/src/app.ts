import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { newsRouter } from "./routes/news.router";
import { dataLoaderMiddleware } from "./middlewares/dataLoader.middleware";
import { userRouter } from "./routes/user.router";

const app = express();

export const port = process.env.PORT || 3000;

export const BASE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

declare global {
  namespace Express {
    interface Request {
      users: any[];
      news: any[];
      companies: any[];
      user: any;
    }
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL
      ? [
          process.env.CLIENT_URL,
          "http://localhost:5173",
          "http://localhost:4173",
        ]
      : ["http://localhost:5173", "http://localhost:4173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("static"));

app.use(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  next();
});

app.use(dataLoaderMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/docs", async (req, res) => {
  const data = await fetch(`${BASE_URL}/scalar-ui.html`);
  const html = await data.text();
  res.send(html);
});

app.use("/api/user", userRouter);

app.use("/api/news", newsRouter);

export default app;
