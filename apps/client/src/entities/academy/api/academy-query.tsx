import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getAcademySalesQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "sales"],
    queryFn: ({ signal }) => apiClient.getAcademySales({ signal }),
  });
}

export function getAcademySectionsQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "sections"],
    queryFn: ({ signal }) => apiClient.getAcademySections({ signal }),
  });
}
