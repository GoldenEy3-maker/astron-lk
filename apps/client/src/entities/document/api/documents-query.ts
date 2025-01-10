import { apiClient } from "@/shared/api/client";
import { queryClient } from "@/shared/config/query-client";
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
          category: params?.category,
        },
        signal,
      }),
    initialPageParam: params?.page ?? 1,
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

type ResetDocumentsQueryPagesParams = {
  page: number;
  category?: string;
  limit?: number;
};

export function resetDocumentsQueryPages(
  params: ResetDocumentsQueryPagesParams
) {
  queryClient.setQueryData(
    getDocumentsInfiniteQueryOptions({
      limit: params.limit,
      category: params.category ?? undefined,
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

export function prefetchDocumentsPage(params: GetDocumentsQueryOptionsParams) {
  if (
    !queryClient.getQueryData(
      getDocumentsInfiniteQueryOptions({
        limit: params.limit,
        category: params.category ?? undefined,
        page: params?.page ?? 1,
      }).queryKey
    )
  )
    queryClient.prefetchInfiniteQuery(
      getDocumentsInfiniteQueryOptions({
        limit: params.limit,
        category: params.category ?? undefined,
        page: params?.page ?? 1,
      })
    );
}
