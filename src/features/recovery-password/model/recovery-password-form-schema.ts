import { z } from "zod";

export const recoveryPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(6, {
        message: "Пароль должен содержать не менее 6 символов",
      })
      .regex(/[0-9]/, {
        message: "Пароль должен содержать цифры",
      })
      .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, {
        message: "Пароль должен содержать спецсимволы",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type RecoveryPasswordFormSchema = z.infer<
  typeof recoveryPasswordFormSchema
>;
