import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

type GetEmployeeTestingQueryOptionsProps = {
  year?: string;
  partnerId?: string;
};

export function getEmployeeTestingQueryOptions(
  params: GetEmployeeTestingQueryOptionsProps,
) {
  return queryOptions({
    queryKey: ["employee-testing", params?.year, params?.partnerId],
    queryFn: ({ signal }) =>
      apiClient.getEmployeeTesting({
        queries: { year: params.year!, partnerId: params?.partnerId },
        signal,
      }),
    enabled: !!params.year,
  });
}

export function getEmployeeTestingUploadedYearsQueryOptions(
  partnerId?: string,
) {
  return queryOptions({
    queryKey: ["employee-testing", "uploaded-years", partnerId],
    queryFn: ({ signal }) =>
      apiClient.getEmployeeTestingUploadedYears({
        signal,
        queries: { partnerId },
      }),
  });
}
