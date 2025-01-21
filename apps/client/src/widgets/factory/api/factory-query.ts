import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getFactoryDocumentQueryOptions() {
  return queryOptions({
    queryKey: ["factory", "document"],
    queryFn: ({ signal }) => apiClient.getFactoryDocument({ signal }),
  });
}
