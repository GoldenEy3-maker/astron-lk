import { DataPeriodSelectKeyMap } from "@/shared/constants/data-perido-select-maps";
import { useControllableState } from "@/shared/lib/use-controllable-state";
import { useQuery } from "@tanstack/react-query";
import { getEmployeeTestingQueryOptions } from "../api/employee-testing-query";

type UseEmployeeTestingProps = {
  period?: DataPeriodSelectKeyMap;
  onPeriodChange?: (period: DataPeriodSelectKeyMap) => void;
};

export function useEmployeeTesting({
  period,
  onPeriodChange,
}: UseEmployeeTestingProps) {
  const [controlledPeriod, setControlledPeriod] = useControllableState({
    prop: period,
    defaultProp: "year",
    onChange: onPeriodChange,
  });

  const { data, isLoading } = useQuery(
    getEmployeeTestingQueryOptions(controlledPeriod)
  );

  return { data, isLoading, controlledPeriod, setControlledPeriod };
}
