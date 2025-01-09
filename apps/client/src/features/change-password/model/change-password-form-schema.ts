import { passwordSchema } from "@/shared/model/password-schema";
import { z } from "zod";

export const changePasswordFormSchema = z
  .object({
    password: z.string().min(1, "Обязательное поле"),
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type ChangePasswordFormSchema = z.infer<typeof changePasswordFormSchema>;
