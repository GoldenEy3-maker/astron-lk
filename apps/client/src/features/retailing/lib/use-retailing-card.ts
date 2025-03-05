import { useQuery } from "@tanstack/react-query";
import { RetailingQueryType } from "../model/types";
import { getRetailingUploadedYearsQueryOptions } from "../api/retailing-query";
import { useEffect, useState } from "react";
import { useRetailingQuartresPlan } from "./use-retailing-quartres-plan";

type UseRetailingCardParams = {
  type: RetailingQueryType;
  partnerId?: string;
};

export function useRetailingCard({ type, partnerId }: UseRetailingCardParams) {
  const { data: uploadedYears, isLoading: isUploadedYearsLoading } = useQuery(
    getRetailingUploadedYearsQueryOptions({ type, partnerId }),
  );

  const [year, setYear] = useState<string | undefined>();

  const { isQuartersPlanLoading, progress, quartersPlan, yearFact, yearPlan } =
    useRetailingQuartresPlan({ type, partnerId, year });

  useEffect(() => {
    if (uploadedYears?.[0]) setYear(uploadedYears[0]);
  }, [uploadedYears]);

  return {
    year,
    setYear,
    uploadedYears,
    isUploadedYearsLoading,
    data: quartersPlan,
    isLoading: isQuartersPlanLoading,
    progress,
    yearFact,
    yearPlan,
  };
}
