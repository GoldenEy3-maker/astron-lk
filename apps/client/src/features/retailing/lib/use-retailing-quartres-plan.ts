import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getRetailingQuartersPlanQueryOptions } from "../api/retailing-query";
import { RetailingQueryType } from "../model/types";

type UseRetailingQuartresPlanParams = {
  type: RetailingQueryType;
  year?: string;
  partnerId?: string;
};

export function useRetailingQuartresPlan({
  type,
  partnerId,
  year,
}: UseRetailingQuartresPlanParams) {
  const { data: quartersPlan, isLoading: isQuartersPlanLoading } = useQuery({
    ...getRetailingQuartersPlanQueryOptions({ type, partnerId, year }),
    placeholderData: keepPreviousData,
  });

  const yearPlan = quartersPlan?.data.reduce(
    (acc, quarter) => acc + quarter.plan,
    0,
  );

  const yearFact = quartersPlan?.data.reduce(
    (acc, quarter) => acc + (quarter.fact ?? 0),
    0,
  );

  const progress =
    yearFact !== undefined && yearPlan !== undefined
      ? Math.floor((yearFact / yearPlan) * 100)
      : undefined;

  console.log(progress);

  return { quartersPlan, isQuartersPlanLoading, yearPlan, yearFact, progress };
}
