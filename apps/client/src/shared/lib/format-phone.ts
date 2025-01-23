import { z } from "zod";
import {
  parsePhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";

// type Options = {
//   mask: string;
//   replacement: Replacement;
// };

// export const phoneFormatOptions: Options = {
//   mask: "+_ (___) ___ __ __",
//   replacement: { _: /\d/ },
// };

export function unformatPhone(value: string) {
  return parsePhoneNumber(value)?.number;
}

export function formatPhone(value: string) {
  return formatPhoneNumberIntl(value);
}

export const phoneFormatSchema = z.string().superRefine((val, ctx) => {
  try {
    const phoneNumber = parsePhoneNumber(val);

    if (!phoneNumber?.isValid()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Неверный формат номера телефона",
      });
    }
  } catch {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Неверный формат номера телефона",
    });
  }
});

// export const phoneFormatSchema = z
//   .string()
//   .regex(/^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/, {
//     message: "Неверный формат номера",
//   });
