import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getOnlineTestsQueryOptions() {
  return queryOptions({
    queryKey: ["online-tests"],
    queryFn: ({ signal }) => apiClient.getOnlineTest({ signal }),
  });
}
