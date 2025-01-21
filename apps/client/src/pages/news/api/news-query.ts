import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getNewsByIdQueryOptions(id: string) {
  return queryOptions({
    queryKey: ["news", "byId", id],
    queryFn: ({ signal }) => apiClient.getNewsById({ params: { id }, signal }),
  });
}
