import { apiClient } from "@/shared/api/client";
import { queryClient } from "@/shared/config/query-client";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import { BulletinsSortKeys } from "../model/bulletins-sort-keys";

type GetBulletinsQueryOptionsParams = {
  limit?: number;
  category?: string;
  page?: number;
  sort?: BulletinsSortKeys;
  fromDate?: string;
  toDate?: string;
};

export function getBulletinsInfiniteQueryOptions(
  params?: GetBulletinsQueryOptionsParams
) {
  return infiniteQueryOptions({
    queryKey: [
      "bulletins",
      params?.limit,
      params?.category,
      params?.page,
      params?.sort,
      params?.fromDate,
      params?.toDate,
    ],
    queryFn: ({ signal, pageParam }) =>
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
      }),
    initialPageParam: params?.page ?? 1,
    getNextPageParam: (result) =>
      typeof result.nextPage !== "boolean" ? result.nextPage : null,
    select: (result) => ({
      bulletins: result.pages.flatMap((page) => page.data),
      totalPages: result.pages[0].totalPages,
    }),
  });
}

export function getBulletinsCategoriesQueryOptions() {
  return queryOptions({
    queryKey: ["bulletins-categories"],
    queryFn: ({ signal }) => apiClient.getBulletinCategories({ signal }),
  });
}

type ResetBulletinsQueryPagesParams = {
  page: number;
  category?: string;
  limit?: number;
  sort?: BulletinsSortKeys;
  fromDate?: string;
  toDate?: string;
};

export function resetBulletinsQueryPages(
  params: ResetBulletinsQueryPagesParams
) {
  queryClient.setQueryData(
    getBulletinsInfiniteQueryOptions({
      limit: params.limit,
      category: params.category ?? undefined,
      page: params.page,
      sort: params?.sort,
      fromDate: params?.fromDate,
      toDate: params?.toDate,
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

export function prefetchBulletinsPage(params: GetBulletinsQueryOptionsParams) {
  if (
    !queryClient.getQueryData(
      getBulletinsInfiniteQueryOptions({
        limit: params.limit,
        category: params.category ?? undefined,
        page: params?.page ?? 1,
        sort: params?.sort,
        fromDate: params?.fromDate,
        toDate: params?.toDate,
      }).queryKey
    )
  )
    queryClient.prefetchInfiniteQuery(
      getBulletinsInfiniteQueryOptions({
        limit: params.limit,
        category: params.category ?? undefined,
        page: params?.page ?? 1,
        sort: params?.sort,
        fromDate: params?.fromDate,
        toDate: params?.toDate,
      })
    );
}
