import { apiClient } from "@/shared/api";
import { queryOptions } from "@tanstack/react-query";

export function getUserCompanyQueryOptions() {
  return queryOptions({
    queryKey: ["company"],
    queryFn: ({ signal }) => apiClient.getUserCompany({ signal }),
  });
}
