import { apiClient } from "@/shared/api";
import { infiniteQueryOptions } from "@tanstack/react-query";

type GetNewsQueryOptionsParams = {
  limit?: number;
};

export function getNewsInfiniteQueryOptions(
  params?: GetNewsQueryOptionsParams
) {
  return infiniteQueryOptions({
    queryKey: ["news", params?.limit],
    queryFn: ({ signal, pageParam }) =>
      apiClient.getNews({
        queries: { limit: params?.limit, page: pageParam },
        signal,
      }),
    initialPageParam: 1,
    getNextPageParam: (result) =>
      typeof result.nextPage !== "boolean" ? result.nextPage : null,
    select: (result) => result.pages.flatMap((page) => page.data),
  });
}
