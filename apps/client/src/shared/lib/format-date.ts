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

export function getFiscalQuarter(date: Date) {
  const quarter = Math.floor(date.getMonth() / 3 + 2);

  return quarter > 4 ? quarter - 4 : quarter;
}

export function getMonthsByFiscalQuarter(quarter: number) {
  switch (quarter) {
    case 1:
      return [9, 10, 11];
    case 2:
      return [0, 1, 2];
    case 3:
      return [3, 4, 5];
    case 4:
      return [6, 7, 8];
    default:
      throw new Error(
        "Invalid fiscal quarter value. Should be between 1 and 4.",
      );
  }
}
