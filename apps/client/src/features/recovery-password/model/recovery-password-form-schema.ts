import { passwordSchema } from "@/shared/model/password-schema";
import { z } from "zod";

export const recoveryPasswordFormSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type RecoveryPasswordFormSchema = z.infer<
  typeof recoveryPasswordFormSchema
>;
