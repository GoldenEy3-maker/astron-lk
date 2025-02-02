import { apiClient } from "@/shared/api/client";
import { infiniteQueryOptions } from "@tanstack/react-query";

type GetNewsQueryOptionsParams = {
  limit?: number;
};

export function getNewsInfiniteQueryOptions(
  params?: GetNewsQueryOptionsParams,
) {
  return infiniteQueryOptions({
    queryKey: ["news", params?.limit],
    queryFn: ({ signal, pageParam }) =>
      apiClient.getNews({
        queries: { limit: params?.limit, page: pageParam },
        signal,
      }),
    initialPageParam: 1,
    getNextPageParam: (result) => result.nextPage || undefined,
    select: (result) => result.pages.flatMap((page) => page.data),
  });
}
