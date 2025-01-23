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

export function getAcademyProjectByIdQueryOptions(id: string) {
  return queryOptions({
    queryKey: ["academy", "project", id],
    queryFn: ({ signal }) =>
      apiClient.getAcademyProjectById({ params: { id }, signal }),
  });
}
