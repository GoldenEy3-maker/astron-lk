import {
  useQueryState,
  parseAsStringEnum,
  parseAsString,
  createParser,
} from "nuqs";
import { DateRange } from "react-day-picker";
import { getUTCDate, getUTCFromDate, isoStringWithoutTime } from "@repo/date";
import { DocumentsSortKeyMap } from "../constants/documents-sort-maps";

type UseDocumentsToolbarProps = {
  onCategoryUpdate?: () => void;
  onDateUpdate?: () => void;
};

const parseAsIsoUTCDate = createParser({
  serialize(value: Date) {
    return isoStringWithoutTime(value);
  },
  parse(value: string) {
    return getUTCFromDate(new Date(value));
  },
});

export function useDocumentsToolbar(params?: UseDocumentsToolbarProps) {
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
    parseAsStringEnum(Object.values(DocumentsSortKeyMap))
  );
  const [fromDateFilter, setFromDateFilter] = useQueryState(
    "fromDate",
    parseAsIsoUTCDate
  );
  const [toDateFilter, setToDateFilter] = useQueryState(
    "toDate",
    parseAsIsoUTCDate
  );
  const [category, setCategory] = useQueryState("category", parseAsString);

  function onCategoryChange(newCategory: string) {
    setCategory(newCategory === "all" ? null : newCategory);
    params?.onCategoryUpdate?.();
  }

  function onSortChange(newSort: DocumentsSortKeyMap) {
    setSort(newSort === "latest" ? null : newSort);
  }

  function onDateChange(newDate: DateRange | undefined) {
    setFromDateFilter(newDate?.from ?? null);
    setToDateFilter(newDate?.to ?? null);
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
