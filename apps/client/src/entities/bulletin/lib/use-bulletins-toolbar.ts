import {
  useQueryState,
  parseAsStringEnum,
  parseAsString,
  parseAsIsoDate,
} from "nuqs";
import { DateRange } from "react-day-picker";
import { BulletinsSortKeys } from "../model/bulletins-sort-keys";
import { getUTCDate } from "@/shared/lib/get-utc-date";

type UseBulletinsToolbarProps = {
  onCategoryUpdate?: () => void;
  onDateUpdate?: () => void;
};

export function useBulletinsToolbar(params?: UseBulletinsToolbarProps) {
  const defaultFromDateFilter = getUTCDate(
    new Date().getUTCFullYear(),
    new Date().getUTCMonth(),
    1
  );

  const defaultToDateFilter = getUTCDate(
    new Date().getUTCFullYear(),
    new Date().getUTCMonth() + 1,
    0
  );

  const [sort, setSort] = useQueryState(
    "sort",
    parseAsStringEnum(Object.values(BulletinsSortKeys)).withDefault("latest")
  );
  const [fromDateFilter, setFromDateFilter] = useQueryState(
    "fromDate",
    parseAsIsoDate
  );
  const [toDateFilter, setToDateFilter] = useQueryState(
    "toDate",
    parseAsIsoDate
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
    setFromDateFilter(newDate?.from ? newDate.from : null);
    setToDateFilter(newDate?.to ? newDate.to : null);
    params?.onDateUpdate?.();
  }

  // useEffect(() => {
  //   if (!fromDateFilter && !toDateFilter) {
  //     setFromDateFilter(defaultFromDateFilter);
  //     setToDateFilter(defaultToDateFilter);
  //     params?.onDateUpdate?.();
  //   }
  // }, []);

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
