import express from "express";
import cors from "cors";
import fs from "fs/promises";
import { usersRouter } from "./routes/users.mjs";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.static("mock/schemas"));

let cache = {
  users: [],
};

async function loadUsers() {
  const data = await fs.readFile("mock/schemas/users.json");
  cache.users = JSON.parse(data);
}

async function dataLoaderMiddleware(req, res, next) {
  if (cache.users.length === 0) await loadUsers();
  req.users = cache.users;
  next();
}

app.use(dataLoaderMiddleware);

app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Mock server start at ${PORT} port`);
});
