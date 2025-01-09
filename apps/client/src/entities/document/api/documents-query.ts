import { apiClient } from "@/shared/api/client";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

type GetDocumentsQueryOptionsParams = {
  limit?: number;
  category?: string;
  page?: number;
};

export function getDocumentsInfiniteQueryOptions(
  params?: GetDocumentsQueryOptionsParams
) {
  return infiniteQueryOptions({
    queryKey: ["documents", params?.limit, params?.category, params?.page],
    queryFn: ({ signal, pageParam }) =>
      apiClient.getDocuments({
        queries: {
          limit: params?.limit,
          page: pageParam,
          // page: params?.page,
          category: params?.category,
        },
        signal,
      }),
    initialPageParam: 1,
    // initialPageParam: params?.page ?? 1,
    getNextPageParam: (result) =>
      typeof result.nextPage !== "boolean" ? result.nextPage : null,
    select: (result) => ({
      documents: result.pages.flatMap((page) => page.data),
      totalPages: result.pages[0].totalPages,
    }),
  });
}

export function getDocumentsCategoriesQueryOptions() {
  return queryOptions({
    queryKey: ["documents-categories"],
    queryFn: ({ signal }) => apiClient.getDocumentCategories({ signal }),
  });
}
