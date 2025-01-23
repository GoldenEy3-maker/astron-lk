import { useQueryState, parseAsStringEnum, parseAsString } from "nuqs";
import { DateRange } from "react-day-picker";
import { DocumentsSortKeyMap } from "../constants/documents-sort-maps";
import { parseAsLocalDate } from "@/shared/lib/format-date";

type UseDocumentsToolbarProps = {
  onCategoryUpdate?: () => void;
  onDateUpdate?: () => void;
};

export function useDocumentsToolbar(params?: UseDocumentsToolbarProps) {
  const [sort, setSort] = useQueryState(
    "sort",
    parseAsStringEnum(Object.values(DocumentsSortKeyMap))
  );
  const [fromDateFilter, setFromDateFilter] = useQueryState(
    "fromDate",
    parseAsLocalDate
  );
  const [toDateFilter, setToDateFilter] = useQueryState(
    "toDate",
    parseAsLocalDate
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

  return {
    category,
    sort,
    fromDateFilter,
    toDateFilter,
    onSortChange,
    onDateChange,
    onCategoryChange,
  };
}
