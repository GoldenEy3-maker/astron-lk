import { phoneFormatSchema } from "@/shared/lib/phone-format";
import { z } from "zod";

export const feedbackFormSchema = z.object({
  fio: z.string().min(1, { message: "Обязательное поле" }),
  phone: z
    .string()
    .min(1, { message: "Обязательное поле" })
    .pipe(phoneFormatSchema),
  message: z.string().min(1, { message: "Обязательное поле" }),
  privacy: z.boolean().refine((value) => value, {
    message: "Обязательное поле",
  }),
  personalData: z.boolean().refine((value) => value, {
    message: "Обязательное поле",
  }),
});

export type FeedbackFormSchema = z.infer<typeof feedbackFormSchema>;
