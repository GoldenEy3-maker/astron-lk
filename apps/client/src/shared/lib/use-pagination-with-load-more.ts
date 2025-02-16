import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { useScrollTo } from "./use-scroll-to";
import { useState } from "react";
import { parseAsInteger } from "nuqs";
import { useQueryState } from "nuqs";

type UsePaginationWithLoadMoreProps<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown,
> = {
  scrollToRef?: React.RefObject<HTMLDivElement>;
  infiniteQueryOptions: (
    page: number,
  ) => UseInfiniteQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryFnData,
    TQueryKey,
    TPageParam
  >;
  resetPaginationQueryKey: (page?: number) => QueryKey;
  prefetchNextPageInfiniteQueryOptions: (
    nextPage: number,
  ) => UseInfiniteQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryFnData,
    TQueryKey,
    TPageParam
  >;
};

export function usePaginationWithLoadMore<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown,
>({
  scrollToRef,
  infiniteQueryOptions,
  resetPaginationQueryKey,
  prefetchNextPageInfiniteQueryOptions,
}: UsePaginationWithLoadMoreProps<
  TQueryFnData,
  TError,
  TData,
  TQueryKey,
  TPageParam
>) {
  const queryClient = useQueryClient();

  const [queryPage, setQueryPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1),
  );
  const [displayedPage, setDisplayedPage] = useState(queryPage);

  const { scrollTo } = useScrollTo({
    ref: scrollToRef,
  });

  const infiniteQueryResult = useInfiniteQuery(infiniteQueryOptions(queryPage));

  function resetPagination(page?: number) {
    setQueryPage(page ?? 1);
    setDisplayedPage(page ?? 1);

    const queryKey = resetPaginationQueryKey(page);

    queryClient.setQueryData<InfiniteData<TQueryFnData, TPageParam>>(
      queryKey,
      (data) => {
        if (!data) return undefined;
        return {
          pages: data.pages.slice(0, 1),
          pageParams: data.pageParams.slice(0, 1),
        };
      },
    );
  }

  function handlePageChange(newPage: number) {
    scrollTo();
    resetPagination(newPage);
  }

  function onLoadMore() {
    infiniteQueryResult.fetchNextPage();
    setDisplayedPage((prev) => prev + 1);
    queryClient.prefetchInfiniteQuery(
      prefetchNextPageInfiniteQueryOptions(displayedPage + 1),
    );
  }

  function onPreviousPage() {
    setQueryPage(queryPage - 1);
    setDisplayedPage(queryPage - 1);
  }

  function onNextPage() {
    setQueryPage(queryPage + 1);
    setDisplayedPage(queryPage + 1);
  }

  return {
    page: displayedPage,
    handlePageChange,
    onLoadMore,
    onPreviousPage,
    onNextPage,
    resetPagination,
    ...infiniteQueryResult,
  };
}
