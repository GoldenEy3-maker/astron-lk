import { useScrollTo } from "@/shared/lib/use-scroll-to";
import { useInfiniteQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";
import { useState } from "react";
import {
  getDocumentsInfiniteQueryOptions,
  GetDocumentsQueryKeys,
  prefetchDocumentsPage,
  resetDocumentsQueryPages,
} from "../api/documents-query";
import { useDocumentsToolbar } from "./use-documents-toolbar";
import { isoStringWithoutTime } from "@/shared/lib/iso-string-without-time";

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
  const [queryPage, setQueryPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1)
  );
  const [displayedPage, setDisplayedPage] = useState(queryPage ?? 1);

  const { scrollTo } = useScrollTo({
    ref: scrollToRef,
  });

  const {
    category,
    sort,
    fromDateFilter,
    toDateFilter,
    defaultFromDateFilter,
    defaultToDateFilter,
    onSortChange,
    onDateChange,
    onCategoryChange,
  } = useDocumentsToolbar({
    onCategoryUpdate: resetPagination,
    onDateUpdate: resetPagination,
  });

  function resetPagination() {
    setQueryPage(1);
    setDisplayedPage(1);
    resetDocumentsQueryPages({
      queryKey,
      page: 1,
      category: category ?? undefined,
      limit: limit ?? undefined,
      sort: sort ?? undefined,
      fromDate: fromDateFilter
        ? isoStringWithoutTime(fromDateFilter)
        : undefined,
      toDate: toDateFilter ? isoStringWithoutTime(toDateFilter) : undefined,
    });
  }

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      getDocumentsInfiniteQueryOptions({
        queryKey,
        limit,
        category: category ?? undefined,
        page: queryPage ?? undefined,
        sort: sort ?? undefined,
        fromDate: fromDateFilter
          ? isoStringWithoutTime(fromDateFilter)
          : undefined,
        toDate: toDateFilter ? isoStringWithoutTime(toDateFilter) : undefined,
      })
    );

  function handlePageChange(newPage: number) {
    setQueryPage(newPage);
    scrollTo();
    setDisplayedPage(newPage);
    resetDocumentsQueryPages({
      queryKey,
      page: newPage,
      category: category ?? undefined,
      limit: limit ?? undefined,
      sort: sort ?? undefined,
      fromDate: fromDateFilter
        ? isoStringWithoutTime(fromDateFilter)
        : undefined,
      toDate: toDateFilter ? isoStringWithoutTime(toDateFilter) : undefined,
    });
  }

  function onLoadMore() {
    fetchNextPage();
    setDisplayedPage((prev) => prev + 1);
    prefetchDocumentsPage({
      queryKey,
      limit: limit ?? undefined,
      category: category ?? undefined,
      page: displayedPage + 1,
      sort: sort ?? undefined,
      fromDate: fromDateFilter
        ? isoStringWithoutTime(fromDateFilter)
        : undefined,
      toDate: toDateFilter ? isoStringWithoutTime(toDateFilter) : undefined,
    });
  }

  function onPreviousPage() {
    handlePageChange(displayedPage - 1);
  }

  function onNextPage() {
    handlePageChange(displayedPage + 1);
  }

  return {
    data,
    displayedPage,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    handlePageChange,
    category,
    onCategoryChange,
    sort,
    onSortChange,
    defaultFromDateFilter,
    defaultToDateFilter,
    fromDateFilter,
    toDateFilter,
    onDateChange,
    onLoadMore,
    onPreviousPage,
    onNextPage,
  };
}
