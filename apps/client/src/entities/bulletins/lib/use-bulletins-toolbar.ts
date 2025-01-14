import { addMonths } from "date-fns";
import { useQueryState, parseAsStringEnum, parseAsString } from "nuqs";
import { DateRange } from "react-day-picker";
import { BulletinsSortKeys } from "../model/bulletins-sort-keys";
import { isoStringWithoutTime } from "@/shared/lib/iso-string-without-time";

type UseBulletinsToolbarProps = {
  onCategoryUpdate?: () => void;
};

export function useBulletinsToolbar(params?: UseBulletinsToolbarProps) {
  const defaultFromDateFilter = new Date(new Date().setDate(1));
  const defaultToDateFilter = new Date(
    addMonths(new Date().setDate(1), 1).setDate(0)
  );

  const [sort, setSort] = useQueryState(
    "sort",
    parseAsStringEnum(Object.values(BulletinsSortKeys))
  );
  const [fromDateFilter, setFromDateFilter] = useQueryState(
    "fromDate",
    parseAsString.withDefault(isoStringWithoutTime(defaultFromDateFilter))
  );
  const [toDateFilter, setToDateFilter] = useQueryState(
    "toDate",
    parseAsString.withDefault(isoStringWithoutTime(defaultToDateFilter))
  );
  const [category, setCategory] = useQueryState("category", parseAsString);

  function onCategoryChange(newCategory: string) {
    setCategory(newCategory === "all" ? null : newCategory);
    params?.onCategoryUpdate?.();
  }

  function onSortChange(newSort: BulletinsSortKeys) {
    setSort(newSort);
  }

  function onDateChange(newDate: DateRange | undefined) {
    setFromDateFilter(
      newDate?.from ? isoStringWithoutTime(newDate.from) : null
    );
    setToDateFilter(newDate?.to ? isoStringWithoutTime(newDate.to) : null);
  }

  return {
    category,
    sort,
    fromDateFilter,
    toDateFilter,
    defaultFromDateFilter,
    defaultToDateFilter,
    onSortChange,
    onDateChange,
    onCategoryChange,
  };
}
