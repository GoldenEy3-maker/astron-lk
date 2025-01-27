import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getKpiUploadedDate(partnerId?: string) {
  return queryOptions({
    queryKey: ["kpi", "uploaded-date", partnerId],
    queryFn: ({ signal }) =>
      apiClient.getKpiUploadedDate({ signal, queries: { partnerId } }),
  });
}
