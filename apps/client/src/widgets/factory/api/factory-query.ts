import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getFactoryInfoQueryOptions() {
  return queryOptions({
    queryKey: ["factory", "info"],
    queryFn: ({ signal }) => apiClient.getFactoryInfo({ signal }),
  });
}

export function getFactoryTeamQueryOptions() {
  return queryOptions({
    queryKey: ["factory", "team"],
    queryFn: ({ signal }) => apiClient.getFactoryTeam({ signal }),
  });
}
