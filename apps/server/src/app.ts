import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { newsRouter } from "./routes/news.router";
import { userRouter } from "./routes/user.router";

const app = express();

export const port = process.env.PORT || 3000;

export const BASE_URL = process.env.VERCEL_URL
  ? `https://astron-lk-server.vercel.app`
  : `http://localhost:${port}`;

export const PUBLIC_URL = process.env.VERCEL_URL ? "public/" : "";

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL
      ? [`https://${process.env.CLIENT_URL}`]
      : ["http://localhost:5173", "http://localhost:4173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("public"));

app.use(async (req, res, next) => {
  if (!process.env.CLIENT_URL)
    await new Promise((resolve) => setTimeout(resolve, 400));

  next();
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

app.use("/api/user", userRouter);

app.use("/api/news", newsRouter);

export default app;
