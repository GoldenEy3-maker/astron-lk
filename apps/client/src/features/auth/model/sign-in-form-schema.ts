import { z } from "zod";

export const signInFormSchema = z.object({
  login: z
    .string()
    .min(1, "Обязательное поле")
    .email("Проверьте правильность логина"),
  password: z.string().min(1, "Обязательное поле"),
  remember: z.boolean(),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
