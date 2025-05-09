import { schemas } from "@/shared/api/v1";
import { getFiscalQuarter, getMonthsByFiscalQuarter } from "@repo/date";
import { set } from "date-fns";
import { z } from "zod";

type LeadGenerationMonth = {
  idx: number;
  value: number | null;
  threshold: number;
};

type LeadGenerationQuarter = {
  quarter: number;
  months: LeadGenerationMonth[];
};

type UseLeadGenerationPlanParams = {
  months?: z.infer<typeof schemas.LeadGenerationMonth>[];
};

export function useLeadGenerationPlan(params?: UseLeadGenerationPlanParams) {
  const initialData: LeadGenerationQuarter[] = Array.from(
    { length: 4 },
    (_, idx) => ({
      quarter: idx + 1,
      months: Array.from({ length: 3 }, (_, mIdx) => ({
        idx: getMonthsByFiscalQuarter(idx + 1)[mIdx],
        value: null,
        threshold: 0,
      })),
    }),
  );

  const quarters =
    params?.months?.reduce((acc, item) => {
      const quarter = getFiscalQuarter(
        set(new Date(), { month: item.monthIdx, date: 1 }),
      );

      const quarterCellIndex = acc.findIndex((d) => d.quarter === quarter);

      if (quarterCellIndex === -1) return acc;

      acc[quarterCellIndex] = {
        ...acc[quarterCellIndex],
        months: acc[quarterCellIndex].months.map((m) => {
          if (m.idx === item.monthIdx)
            return {
              ...m,
              threshold: item.threshold,
              value: item.value,
            };
          return m;
        }),
      };

      return acc;
    }, initialData) ?? initialData;

  function renderMonthProgress(
    value: number | null,
    threshold: number,
  ): string | null {
    if (value === null) return null;

    return value >= threshold ? "100%" : "0%";
  }

  function checkIsDestructiveMonth(month: LeadGenerationMonth) {
    return month.value !== null && month.value < month.threshold;
  }

  function checkIsSuccessMonth(month: LeadGenerationMonth) {
    return month.value && month.value >= month.threshold;
  }

  function checkIsDestructiveQuarter(quarter: LeadGenerationQuarter) {
    return quarter.months.some((month) => checkIsDestructiveMonth(month));
  }

  function checkIsSuccessQuarter(quarter: LeadGenerationQuarter) {
    return quarter.months.every((month) => checkIsSuccessMonth(month));
  }

  function checkIsEmptyQuarter(quarter: LeadGenerationQuarter) {
    return quarter.months.every((month) => month.value === null);
  }

  return {
    quarters,
    checkIsDestructiveMonth,
    checkIsSuccessMonth,
    checkIsDestructiveQuarter,
    checkIsSuccessQuarter,
    checkIsEmptyQuarter,
    renderMonthProgress,
  };
}
