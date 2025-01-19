import { apiClient } from "@/shared/api/client";
import { DataPeriodSelectKeyMap } from "@/shared/constants/data-perido-select-maps";
import { queryOptions } from "@tanstack/react-query";

export function getEmployeeTestingQueryOptions(
  period?: DataPeriodSelectKeyMap
) {
  return queryOptions({
    queryKey: ["employee-testing", period ?? "year"],
    queryFn: ({ signal }) =>
      apiClient.getEmployeeTesting({
        queries: { period: period ?? "year" },
        signal,
      }),
  });
}
