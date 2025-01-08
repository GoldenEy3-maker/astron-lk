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

export const PUBLIC_URL = process.env.VERCEL_URL ? "public/" : "";

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
app.use(express.static("public"));

app.use(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  next();
});

// app.use(dataLoaderMiddleware);

app.get("/api/test", async (req, res) => {
  res.json({ test: "test" });
});

app.get("/api/docs", async (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html>
  <head>
    <title>Scalar API Reference</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <!-- Need a Custom Header? Check out this example: https://codepen.io/scalarorg/pen/VwOXqam -->
    <!-- Note: We’re using our public proxy to avoid CORS issues. You can remove the 'data-proxy-url' attribute if you don’t need it. -->
    <script
      id="api-reference"
      data-url="${BASE_URL}/${PUBLIC_URL}schema.yaml"
      data-proxy-url="https://proxy.scalar.com"></script>

    <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
  </body>
</html>
    `);
});

// app.use("/api/user", userRouter);

// app.use("/api/news", newsRouter);

export default app;
