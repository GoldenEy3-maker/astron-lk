import { useQuery } from "@tanstack/react-query";
import {
  getLeadGenerationPlanQueryOptions,
  getLeadGenerationUploadedYearsQueryOptions,
} from "../api/lead-generation-query";
import { useEffect, useState } from "react";

type UseLeadGenerationProps = {
  partnerId?: string;
};

export function useLeadGenerationCard({ partnerId }: UseLeadGenerationProps) {
  const { data: uploadedYears, isLoading: isUploadedYearsLoading } = useQuery(
    getLeadGenerationUploadedYearsQueryOptions(partnerId),
  );

  const [year, setYear] = useState<string>();

  const { data, isLoading } = useQuery(
    getLeadGenerationPlanQueryOptions({ year: year, partnerId }),
  );

  useEffect(() => {
    if (uploadedYears?.[0]) setYear(uploadedYears[0]);
  }, [uploadedYears]);

  return {
    data,
    isLoading,
    year,
    setYear,
    uploadedYears,
    isUploadedYearsLoading,
  };
}
