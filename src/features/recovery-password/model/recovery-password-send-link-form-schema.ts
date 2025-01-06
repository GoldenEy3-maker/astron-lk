import { z } from "zod";

export const recoveryPasswordSendLinkFormSchema = z.object({
  email: z
    .string()
    .min(1, "Обязательное поле")
    .email("Проверьте правильность email"),
});

export type RecoveryPasswordSendLinkFormSchema = z.infer<
  typeof recoveryPasswordSendLinkFormSchema
>;
