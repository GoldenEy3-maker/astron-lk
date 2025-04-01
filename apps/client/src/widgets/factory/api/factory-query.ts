import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

const BASE_QUERY_KEY = "factory";

export function getFactoryInfoQueryOptions() {
  return queryOptions({
    queryKey: [BASE_QUERY_KEY, "info"],
    queryFn: ({ signal }) => apiClient.getFactoryInfo({ signal }),
  });
}

export function getFactoryTeamQueryOptions() {
  return queryOptions({
    queryKey: [BASE_QUERY_KEY, "team"],
    queryFn: ({ signal }) => apiClient.getFactoryTeam({ signal }),
  });
}

export function getFactoryExtraQueryOptions() {
  return queryOptions({
    queryKey: [BASE_QUERY_KEY, "extra"],
    queryFn: ({ signal }) => apiClient.getFactoryExtra({ signal }),
  });
}
