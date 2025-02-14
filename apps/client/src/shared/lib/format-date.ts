import { DateArg, format, FormatOptions } from "date-fns";
import { ru } from "date-fns/locale";
import { createParser } from "nuqs";

export function formatDate(
  date: DateArg<Date>,
  formatStr: string = "dd MMMM yyyy",
  options?: FormatOptions,
) {
  return format(date, formatStr, {
    locale: ru,
    ...options,
  });
}

export const parseAsLocalDate = createParser({
  parse(value: string) {
    if (!value) return null;
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day, 12, 0, 0, 0);
  },
  serialize(date: Date | null) {
    if (!date) return "";
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0",
    )}-${String(date.getDate()).padStart(2, "0")}`;
  },
});
