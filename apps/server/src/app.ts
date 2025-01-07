import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { newsRouter } from "./routes/news.router";
import { dataLoaderMiddleware } from "./middlewares/dataLoader.middleware";
import { userRouter } from "./routes/user.router";
import path from "path";

const app = express();

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
    origin: ["http://localhost:5173", "http://localhost:4173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("public"));

app.use(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  next();
});

app.use(dataLoaderMiddleware);

app.get("/api/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/scalar-ui.html"));
});

app.use("/api/user", userRouter);

app.use("/api/news", newsRouter);

export default app;
