import { apiClient } from "@/shared/api/client";
import { infiniteQueryOptions } from "@tanstack/react-query";

type GetSearchInfiniteQueryOptionsProps = {
  query: string;
  page?: number;
  limit?: number;
};

export function getSearchInfiniteQueryOptions(
  params: GetSearchInfiniteQueryOptionsProps
) {
  return infiniteQueryOptions({
    queryKey: ["search", "query", params.query, params.page, params.limit],
    queryFn: ({ signal }) =>
      apiClient.search({
        queries: {
          query: params.query,
          page: params.page,
          limit: params.limit,
        },
        signal,
      }),
    getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
    initialPageParam: params.page ?? 1,
    select: (data) => ({
      result: data.pages.flatMap((page) => page.data),
      totalPages: data.pages[0].totalPages,
      totalResults: data.pages[0].totalResults,
    }),
  });
}
