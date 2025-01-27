import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getPartnersUploadedDateQueryOptions() {
  return queryOptions({
    queryKey: ["partners", "uploaded-date"],
    queryFn: ({ signal }) => apiClient.getPartnersUploadedDate({ signal }),
  });
}
