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
