import { useControllableState } from "@/shared/lib/use-controllable-state";
import { useQuery } from "@tanstack/react-query";
import {
  getEmployeeTestingQueryOptions,
  getEmployeeTestingUploadedYearsQueryOptions,
} from "../api/employee-testing-query";

type UseEmployeeTestingProps = {
  year?: string | null;
  onYearChange?: (year: string) => void;
  partnerId?: string;
};

export function useEmployeeTesting({
  year,
  onYearChange,
  partnerId,
}: UseEmployeeTestingProps) {
  const { data: uploadedYears, isLoading: isUploadedYearsLoading } = useQuery(
    getEmployeeTestingUploadedYearsQueryOptions(partnerId),
  );

  const [controlledYear, setControlledYear] = useControllableState({
    prop: year ?? undefined,
    defaultProp: uploadedYears?.[0] ?? undefined,
    onChange: onYearChange,
  });

  const { data, isLoading } = useQuery(
    getEmployeeTestingQueryOptions({ year: controlledYear, partnerId }),
  );

  function getChartData() {
    if (!data) return [];

    const groupedData = data?.data.reduce((acc, item) => {
      if (acc.has(item.test)) {
        acc.get(item.test)?.push(item);
      } else {
        acc.set(item.test, [item]);
      }
      return acc;
    }, new Map<string, typeof data.data>());

    const result = [];

    for (const [key, value] of groupedData.entries()) {
      result.push({
        name: key,
        isCompleted: value.every((item) => item.result >= 80),
      });
    }

    return result;
  }

  return {
    data: data?.data,
    chartData: getChartData(),
    uploadedAt: data?.uploadedAt,
    updatedAt: data?.updatedAt,
    isLoading,
    controlledYear,
    setControlledYear,
    uploadedYears,
    isUploadedYearsLoading,
  };
}
