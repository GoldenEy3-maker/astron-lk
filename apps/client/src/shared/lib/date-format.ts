import { DateArg, format, FormatOptions } from "date-fns";
import { ru } from "date-fns/locale";

export function dateFormat(
  date: DateArg<Date>,
  formatStr: string = "dd MMMM yyyy",
  options?: FormatOptions
) {
  return format(date, formatStr, {
    locale: ru,
    ...options,
  });
}
