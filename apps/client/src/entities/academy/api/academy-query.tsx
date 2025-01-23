import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getAcademySalesQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "sales"],
    queryFn: ({ signal }) => apiClient.getAcademySales({ signal }),
  });
}

export function getAcademyProjectsQueryOptions() {
  return queryOptions({
    queryKey: ["academy", "projects"],
    queryFn: ({ signal }) => apiClient.getAcademyProjects({ signal }),
  });
}
