import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(6, {
    message: "Пароль должен содержать не менее 6 символов",
  })
  .regex(/[0-9]/, {
    message: "Пароль должен содержать цифры",
  })
  .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, {
    message: "Пароль должен содержать спецсимволы",
  });
