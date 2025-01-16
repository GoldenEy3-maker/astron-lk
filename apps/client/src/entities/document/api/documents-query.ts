import { apiClient, schemas } from "@/shared/api/client";
import { queryClient } from "@/shared/config/query-client";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import { z } from "zod";
import { DocumentsSortKeys } from "../model/documents-sort-keys";

export type GetDocumentsQueryKeys = "documents" | "bulletins" | "favorites";
export type DocumentsQueryFnData =
  | z.infer<typeof schemas.Document>
  | z.infer<typeof schemas.Bulletin>
  | z.infer<typeof schemas.Favorite>;

export type GetDocumentsQueryOptionsParams = {
  queryKey?: GetDocumentsQueryKeys;
  limit?: number;
  category?: string;
  page?: number;
  sort?: DocumentsSortKeys;
  fromDate?: string;
  toDate?: string;
};

const DocumentsQueryFn: Record<
  GetDocumentsQueryKeys,
  (params?: GetDocumentsQueryOptionsParams) => (params: {
    signal: AbortSignal;
    pageParam: number;
  }) => Promise<{
    data: DocumentsQueryFnData[];
    nextPage: number | boolean;
    totalPages: number;
  }>
> = {
  documents: (params?: GetDocumentsQueryOptionsParams) => {
    return ({
      signal,
      pageParam,
    }: {
      signal: AbortSignal;
      pageParam: number;
    }) =>
      apiClient.getDocuments({
        queries: {
          limit: params?.limit,
          page: pageParam,
          category: params?.category,
        },
        signal,
      });
  },
  bulletins: (params?: GetDocumentsQueryOptionsParams) => {
    return ({
      signal,
      pageParam,
    }: {
      signal: AbortSignal;
      pageParam: number;
    }) =>
      apiClient.getBulletins({
        queries: {
          limit: params?.limit,
          page: pageParam,
          category: params?.category,
          sort: params?.sort,
          fromDate: params?.fromDate,
          toDate: params?.toDate,
        },
        signal,
      });
  },
  favorites: (params?: GetDocumentsQueryOptionsParams) => {
    return ({
      signal,
      pageParam,
    }: {
      signal: AbortSignal;
      pageParam: number;
    }) =>
      apiClient.getUserFavorites({
        queries: { limit: params?.limit, page: pageParam },
        signal,
      });
  },
};

export function getDocumentsInfiniteQueryOptions(
  params?: GetDocumentsQueryOptionsParams
) {
  const queryKey = params?.queryKey ?? "documents";

  return infiniteQueryOptions({
    queryKey: [
      queryKey,
      params?.limit,
      params?.page,
      params?.category,
      params?.sort,
      params?.fromDate,
      params?.toDate,
    ],
    queryFn: DocumentsQueryFn[queryKey](params),
    initialPageParam: params?.page ?? 1,
    getNextPageParam: (result) =>
      typeof result.nextPage !== "boolean" ? result.nextPage : null,
    select: (result) => ({
      documents: result.pages.flatMap((page) => page.data),
      totalPages: result.pages[0].totalPages,
    }),
  });
}

const DocumentsCategoriesQueryFn: Record<
  GetDocumentsQueryKeys,
  (params: { signal: AbortSignal }) => Promise<string[]>
> = {
  documents: ({ signal }) => apiClient.getDocumentCategories({ signal }),
  bulletins: ({ signal }) => apiClient.getBulletinCategories({ signal }),
  favorites: ({ signal }) => apiClient.getDocumentCategories({ signal }),
};

export function getDocumentsCategoriesQueryOptions(
  queryKey: GetDocumentsQueryKeys = "documents"
) {
  return queryOptions({
    queryKey: [queryKey, "categories"],
    queryFn: DocumentsCategoriesQueryFn[queryKey],
  });
}

type ResetDocumentsQueryPagesParams = {
  queryKey?: GetDocumentsQueryKeys;
  page: number;
  category?: string;
  limit?: number;
  sort?: DocumentsSortKeys;
  fromDate?: string;
  toDate?: string;
};

export function resetDocumentsQueryPages(
  params: ResetDocumentsQueryPagesParams
) {
  const queryKey = params.queryKey ?? "documents";

  queryClient.setQueryData(
    getDocumentsInfiniteQueryOptions({
      queryKey,
      limit: params.limit,
      category: params.category ?? undefined,
      page: params.page,
      sort: params.sort,
      fromDate: params.fromDate,
      toDate: params.toDate,
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
  const queryKey = params.queryKey ?? "documents";

  if (
    !queryClient.getQueryData(
      getDocumentsInfiniteQueryOptions({
        queryKey,
        limit: params.limit,
        category: params.category ?? undefined,
        page: params?.page ?? 1,
        sort: params.sort,
        fromDate: params.fromDate,
        toDate: params.toDate,
      }).queryKey
    )
  )
    queryClient.prefetchInfiniteQuery(
      getDocumentsInfiniteQueryOptions({
        queryKey,
        limit: params.limit,
        category: params.category ?? undefined,
        page: params?.page ?? 1,
        sort: params.sort,
        fromDate: params.fromDate,
        toDate: params.toDate,
      })
    );
}
