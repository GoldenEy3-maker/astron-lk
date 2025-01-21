import { format, Replacement, unformat } from "@react-input/mask";
import { z } from "zod";

type Options = {
  mask: string;
  replacement: Replacement;
};

export const phoneFormatOptions: Options = {
  mask: "+_ (___) ___ __ __",
  replacement: { _: /\d/ },
};

export function unformatPhone(value: string) {
  return "+" + unformat(value, phoneFormatOptions);
}

export function formatPhone(value: string) {
  return format(value, phoneFormatOptions);
}

export const phoneFormatSchema = z
  .string()
  .regex(/^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/, {
    message: "Неверный формат номера",
  });
