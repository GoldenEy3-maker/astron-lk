import app, { BASE_URL, port } from "./app";
import dotenv from "dotenv";

dotenv.config();

app.listen(port, () => {
  console.log(`⚡️[сервер]: Сервер запущен на ${BASE_URL}`);
});

export default app;
