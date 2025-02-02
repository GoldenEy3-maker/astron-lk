import { apiClient } from "@/shared/api/client";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export function getAcademyConversationsQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "conversations"],
    queryFn: ({ signal }) => apiClient.getAcademyConversations({ signal }),
  });
}

export function getAcademyAnalysisQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "analysis"],
    queryFn: ({ signal }) => apiClient.getAcademyAnalysis({ signal }),
  });
}

export function getAcademyCommercialQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "commercial"],
    queryFn: ({ signal }) => apiClient.getAcademyCommercial({ signal }),
  });
}

export function getAcademyProjectsQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "projects"],
    queryFn: ({ signal }) => apiClient.getAcademyProjects({ signal }),
  });
}

export function getAcademyProjectByIdQueryOptions(id: string) {
  return queryOptions({
    queryKey: ["academy", "project", id],
    queryFn: ({ signal }) =>
      apiClient.getAcademyProjectById({ params: { id }, signal }),
  });
}

export function getAcademyWebinarsQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "webinars"],
    queryFn: ({ signal }) => apiClient.getAcademyWebinars({ signal }),
  });
}

export function getAcademyWebinarByIdQueryOptions(id: string) {
  return queryOptions({
    queryKey: ["academy", "webinar", id],
    queryFn: ({ signal }) =>
      apiClient.getAcademyWebinarById({ params: { id }, signal }),
  });
}

type GetAcademyBenefitsParams = {
  tags?: string[];
  limit?: number;
};

export function getAcademyBenefitsInfiniteQueryOptions(
  params?: GetAcademyBenefitsParams,
) {
  return infiniteQueryOptions({
    queryKey: ["academy", "benefits", params?.tags, params?.limit],
    queryFn: ({ signal, pageParam }) =>
      apiClient.getAcademyBenefits({
        queries: {
          limit: params?.limit,
          tags: params?.tags,
          page: pageParam,
        },
        signal,
      }),
    getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
    initialPageParam: 1,
    select: (result) => ({
      data: result.pages.flatMap((page) => page.data),
      totalResults: result.pages[0].totalResults,
    }),
  });
}

export function getAcademyBenefitsTagsQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "benefits", "tags"],
    queryFn: ({ signal }) => apiClient.getAcademyBenefitTags({ signal }),
  });
}

export function getAcademyBenefitByIdQueryOptions(id: string) {
  return queryOptions({
    queryKey: ["academy", "benefit", id],
    queryFn: ({ signal }) =>
      apiClient.getAcademyBenefitById({ params: { id }, signal }),
  });
}
