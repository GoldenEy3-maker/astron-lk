import { schemas } from "@/shared/api/v1";
import { getFiscalQuarter, getMonthsByFiscalQuarter } from "@repo/date";
import { set } from "date-fns";
import { z } from "zod";

type LeadGenerationMonth = { idx: number; value: number | null };

type LeadGenerationQuarter = {
  quarter: number;
  months: LeadGenerationMonth[];
};

type UseLeadGenerationPlanProps = {
  months?: z.infer<typeof schemas.LeadGenerationMonth>[];
};

export function useLeadGenerationPlan(params?: UseLeadGenerationPlanProps) {
  const minLeadsInMonth = 2;

  const initialData: LeadGenerationQuarter[] = Array(4)
    .fill(null)
    .map((_, idx) => ({
      quarter: idx + 1,
      months: Array(3)
        .fill(null)
        .map((_, mIdx) => ({
          idx: getMonthsByFiscalQuarter(idx + 1)[mIdx],
          value: null,
        })),
    }));

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
          if (m.idx === item.monthIdx) return { ...m, value: item.value };
          return m;
        }),
      };

      return acc;
    }, initialData) ?? initialData;

  function renderMonthProgress(value: number | null): string | null {
    return value ? (value >= minLeadsInMonth ? "100%" : "0%") : null;
  }

  function checkIsDestructiveMonth(month: LeadGenerationMonth) {
    return month.value && month.value < minLeadsInMonth;
  }

  function checkIsSuccessMonth(month: LeadGenerationMonth) {
    return month.value && month.value >= minLeadsInMonth;
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
