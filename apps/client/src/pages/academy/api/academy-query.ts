import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

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
