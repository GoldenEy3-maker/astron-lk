import { useScrollTo } from "@/shared/lib/use-scroll-to";
import { useInfiniteQuery } from "@tanstack/react-query";
import { parseAsString, parseAsInteger, useQueryState } from "nuqs";
import { useState } from "react";
import {
  getDocumentsInfiniteQueryOptions,
  prefetchDocumentsPage,
  resetDocumentsQueryPages,
} from "../api/documents-query";

type UseDocumentsProps = {
  limit: number;
};

export function useDocuments({ limit }: UseDocumentsProps) {
  const [category, setCategory] = useQueryState("category", parseAsString);
  const [queryPage, setQueryPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1)
  );
  const [displayedPage, setDisplayedPage] = useState(queryPage ?? 1);

  const { ref, scrollTo } = useScrollTo();

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      getDocumentsInfiniteQueryOptions({
        limit,
        category: category ?? undefined,
        page: queryPage ?? undefined,
      })
    );

  function handlePageChange(newPage: number) {
    setQueryPage(newPage);
    scrollTo();
    setDisplayedPage(newPage);
    resetDocumentsQueryPages({
      page: newPage,
      category: category ?? undefined,
      limit: limit ?? undefined,
    });
  }

  function onCategoryChange(newCategory: string) {
    setCategory(newCategory === "all" ? null : newCategory);
    setQueryPage(1);
    setDisplayedPage(1);
  }

  function onLoadMore() {
    fetchNextPage();
    setDisplayedPage((prev) => prev + 1);
    prefetchDocumentsPage({
      limit: limit ?? undefined,
      category: category ?? undefined,
      page: displayedPage + 1,
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
    onLoadMore,
    onPagitaionChangeScrollToRef: ref,
    onPreviousPage,
    onNextPage,
  };
}
