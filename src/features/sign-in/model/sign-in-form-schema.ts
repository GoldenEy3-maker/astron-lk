import { z } from "zod";

export const loginFormSchema = z.object({
  login: z
    .string()
    .min(1, "Обязательное поле")
    .email("Проверьте правильность логина"),
  password: z.string().min(1, "Обязательное поле"),
  remember: z.boolean(),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
