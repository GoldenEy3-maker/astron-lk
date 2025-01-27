import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

export function getEmployeeTestingQueryOptions(year?: string) {
  return queryOptions({
    queryKey: ["employee-testing", year],
    queryFn: ({ signal }) =>
      apiClient.getEmployeeTesting({
        queries: { year: year! },
        signal,
      }),
    enabled: !!year,
  });
}

export function getEmployeeTestingUploadedYearsQueryOptions() {
  return queryOptions({
    queryKey: ["employee-testing", "uploaded-years"],
    queryFn: ({ signal }) =>
      apiClient.getEmployeeTestingUploadedYears({ signal }),
  });
}
