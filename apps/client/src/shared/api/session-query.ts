import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getSessionQueryOptions() {
  return queryOptions({
    queryKey: ["user", "session"],
    queryFn: ({ signal }) => apiClient.getSession({ signal }),
  });
}
