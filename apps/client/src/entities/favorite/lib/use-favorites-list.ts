import { useScrollTo } from "@/shared/lib/use-scroll-to";
import { useInfiniteQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";
import { useState } from "react";
import {
  getFavoritesInfiniteQueryOptions,
  prefetchFavoritesPage,
  resetFavoritesQueryPages,
} from "../api/favorites-query";

type UseFavoritesListProps = {
  limit: number;
  scrollToRef?: React.RefObject<HTMLDivElement>;
};

export function useFavoritesList({
  limit,
  scrollToRef,
}: UseFavoritesListProps) {
  const [queryPage, setQueryPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1)
  );
  const [displayedPage, setDisplayedPage] = useState(queryPage ?? 1);

  const { scrollTo } = useScrollTo({
    ref: scrollToRef,
  });

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      getFavoritesInfiniteQueryOptions({
        limit,
        page: queryPage ?? undefined,
      })
    );

  function handlePageChange(newPage: number) {
    setQueryPage(newPage);
    scrollTo();
    setDisplayedPage(newPage);
    resetFavoritesQueryPages({
      page: newPage,
      limit: limit ?? undefined,
    });
  }

  function onLoadMore() {
    fetchNextPage();
    setDisplayedPage((prev) => prev + 1);
    prefetchFavoritesPage({
      limit: limit ?? undefined,
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
    onLoadMore,
    onPreviousPage,
    onNextPage,
  };
}
