import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getKpiUploadedDate() {
  return queryOptions({
    queryKey: ["kpi", "uploaded-date"],
    queryFn: ({ signal }) => apiClient.getKpiUploadedDate({ signal }),
  });
}
