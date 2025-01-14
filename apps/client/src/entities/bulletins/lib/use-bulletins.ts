import { useScrollTo } from "@/shared/lib/use-scroll-to";
import { useInfiniteQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";
import { useState } from "react";
import {
  getBulletinsInfiniteQueryOptions,
  prefetchBulletinsPage,
  resetBulletinsQueryPages,
} from "../api/bulletins-query";

import { useBulletinsToolbar } from "./use-bulletins-toolbar";

type UseBulletinsProps = {
  limit: number;
};

export function useBulletins({ limit }: UseBulletinsProps) {
  const [queryPage, setQueryPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1)
  );
  const [displayedPage, setDisplayedPage] = useState(queryPage ?? 1);

  const { ref, scrollTo } = useScrollTo();

  function resetPagination() {
    setQueryPage(1);
    setDisplayedPage(1);
  }

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
  } = useBulletinsToolbar({
    onCategoryUpdate: resetPagination,
  });

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      getBulletinsInfiniteQueryOptions({
        limit,
        category: category ?? undefined,
        page: queryPage ?? undefined,
        sort: sort ?? "latest",
        fromDate: fromDateFilter,
        toDate: toDateFilter,
      })
    );

  function handlePageChange(newPage: number) {
    setQueryPage(newPage);
    scrollTo();
    setDisplayedPage(newPage);
    resetBulletinsQueryPages({
      page: newPage,
      category: category ?? undefined,
      limit: limit ?? undefined,
      sort: sort ?? "latest",
      fromDate: fromDateFilter,
      toDate: toDateFilter,
    });
  }

  function onLoadMore() {
    fetchNextPage();
    setDisplayedPage((prev) => prev + 1);
    prefetchBulletinsPage({
      limit: limit ?? undefined,
      category: category ?? undefined,
      page: displayedPage + 1,
      sort: sort ?? "latest",
      fromDate: fromDateFilter,
      toDate: toDateFilter,
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
    onPagitaionChangeScrollToRef: ref,
    onPreviousPage,
    onNextPage,
  };
}
