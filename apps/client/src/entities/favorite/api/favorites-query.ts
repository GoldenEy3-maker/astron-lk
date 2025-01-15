import { apiClient } from "@/shared/api/client";
import { queryClient } from "@/shared/config/query-client";
import { infiniteQueryOptions } from "@tanstack/react-query";

type GetFavoritesQueryOptionsParams = {
  limit?: number;
  page?: number;
};

export function getFavoritesInfiniteQueryOptions(
  params?: GetFavoritesQueryOptionsParams
) {
  return infiniteQueryOptions({
    queryKey: ["favorites", params?.limit, params?.page],
    queryFn: ({ signal, pageParam }) =>
      apiClient.getUserFavorites({
        queries: {
          limit: params?.limit,
          page: pageParam,
        },
        signal,
      }),
    initialPageParam: params?.page ?? 1,
    getNextPageParam: (result) =>
      typeof result.nextPage !== "boolean" ? result.nextPage : null,
    select: (result) => ({
      favorites: result.pages.flatMap((page) => page.data),
      totalPages: result.pages[0].totalPages,
    }),
  });
}

type ResetFavoritesQueryPagesParams = {
  page: number;
  limit?: number;
};

export function resetFavoritesQueryPages(
  params: ResetFavoritesQueryPagesParams
) {
  queryClient.setQueryData(
    getFavoritesInfiniteQueryOptions({
      limit: params.limit,
      page: params.page,
    }).queryKey,
    (data) => {
      if (!data) return undefined;
      return {
        pages: data.pages.slice(0, 1),
        pageParams: data.pageParams.slice(0, 1),
      };
    }
  );
}

export function prefetchFavoritesPage(params: GetFavoritesQueryOptionsParams) {
  if (
    !queryClient.getQueryData(
      getFavoritesInfiniteQueryOptions({
        limit: params.limit,
        page: params?.page ?? 1,
      }).queryKey
    )
  )
    queryClient.prefetchInfiniteQuery(
      getFavoritesInfiniteQueryOptions({
        limit: params.limit,
        page: params?.page ?? 1,
      })
    );
}
