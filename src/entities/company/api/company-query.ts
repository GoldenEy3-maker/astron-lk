import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getUserCompanyQueryOptions() {
  return queryOptions({
    queryKey: ["user", "company"],
    queryFn: ({ signal }) => apiClient.getUserCompany({ signal }),
  });
}
