import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getAcademySalesQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "sales"],
    queryFn: ({ signal }) => apiClient.getAcademySales({ signal }),
  });
}

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
