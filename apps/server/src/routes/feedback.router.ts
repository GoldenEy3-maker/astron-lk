import { Request, Response, Router } from "express";
import { Error, Success } from "../types/globals";

const feedbackRouter = Router();

feedbackRouter.post("/", async (req: Request, res: Response<Success>) => {
  const { fio, phone, message, privacy, personalData } = req.body as {
    fio: string;
    phone: string;
    message: string;
    privacy: boolean;
    personalData: boolean;
  };

  console.log(`Отзыв от ${fio}: ${message}. Номер телефона: ${phone}`);

  res.json({ message: "Ваш отзыв успешно отправлен" });
});

export { feedbackRouter };
