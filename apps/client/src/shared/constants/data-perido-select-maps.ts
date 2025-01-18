import { capitalize } from "@/shared/lib/capitalize";
import { ValueOf } from "@/shared/lib/types/utility";
import { getQuarter } from "date-fns";

export const DataPeriodSelectKeyMap = {
  all: "all",
  today: "today",
  month: "month",
  quarter: "quarter",
  year: "year",
  prevYear: "prev-year",
  prevPrevYear: "prev-prev-year",
} as const;

export type DataPeriodSelectKeyMap = ValueOf<typeof DataPeriodSelectKeyMap>;

export const DataPeriodSelectKeyToValueMap: Record<
  DataPeriodSelectKeyMap,
  string
> = {
  all: "За все время",
  today: "За сегодня",
  month: capitalize(new Date().toLocaleString("ru", { month: "long" })),
  quarter: getQuarter(new Date()) + " квартал",
  year: new Date().getFullYear() + " год",
  "prev-year": new Date().getFullYear() - 1 + " год",
  "prev-prev-year": new Date().getFullYear() - 2 + " год",
};
