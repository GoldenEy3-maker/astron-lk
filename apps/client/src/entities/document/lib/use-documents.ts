import {
  DocumentsQueryFnData,
  getDocumentsInfiniteQueryOptions,
  GetDocumentsQueryKeys,
} from "../api/documents-query";
import { useDocumentsToolbar } from "./use-documents-toolbar";
import { isoStringWithoutTime } from "@repo/date";
import { useReadBulletins } from "./use-read-bulletins";
import { usePaginationWithLoadMore } from "@/shared/lib/use-pagination-with-load-more";

type UseDocumentsProps = {
  limit: number;
  scrollToRef?: React.RefObject<HTMLDivElement>;
  queryKey: GetDocumentsQueryKeys;
};

export function useDocuments({
  limit,
  scrollToRef,
  queryKey,
}: UseDocumentsProps) {
  const {
    category,
    sort,
    fromDateFilter,
    toDateFilter,
    onSortChange,
    onDateChange,
    onCategoryChange,
  } = useDocumentsToolbar({
    onCategoryUpdate,
    onDateUpdate,
  });

  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    page,
    handlePageChange,
    onLoadMore,
    onPreviousPage,
    onNextPage,
    resetPagination,
  } = usePaginationWithLoadMore<
    { data: DocumentsQueryFnData[]; nextPage: number; totalPages: number },
    Error,
    { documents: DocumentsQueryFnData[]; totalPages: number },
    (string | number | undefined)[],
    number
  >({
    scrollToRef,
    infiniteQueryOptions: getQueryOptions,
    resetPaginationQueryKey: (page) => getQueryOptions(page ?? 1).queryKey,
    prefetchNextPageInfiniteQueryOptions: getQueryOptions,
  });

  function onCategoryUpdate() {
    resetPagination();
  }

  function onDateUpdate() {
    resetPagination();
  }

  function getQueryOptions(page: number) {
    return getDocumentsInfiniteQueryOptions({
      queryKey,
      limit,
      page,
      category: category ?? undefined,
      sort: sort ?? undefined,
      fromDate: fromDateFilter
        ? isoStringWithoutTime(fromDateFilter)
        : undefined,
      toDate: toDateFilter ? isoStringWithoutTime(toDateFilter) : undefined,
    });
  }

  const { readBulletinsHandler } = useReadBulletins();

  function onRemoveFavoritesExceedMinimum() {
    handlePageChange(page - 1);
  }

  return {
    data,
    page,
    isLoading,
    isFetchingNextPage,
    onRemoveFavoritesExceedMinimum,
    hasNextPage,
    handlePageChange,
    category,
    onCategoryChange,
    sort,
    onSortChange,
    fromDateFilter,
    toDateFilter,
    onDateChange,
    onLoadMore,
    onPreviousPage,
    onNextPage,
    readBulletinsHandler,
  };
}
