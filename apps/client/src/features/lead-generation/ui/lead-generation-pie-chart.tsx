import { schemas } from "@/shared/api/v1";
import { Cell, Label, Pie, PieChart, PieProps, Tooltip } from "recharts";
import { z } from "zod";
import { useLeadGenerationPlan } from "../lib/use-lead-generation-plan";
import { cn } from "@/shared/lib/cn";
import { useId } from "react";
import { LeadGenerationPieChartLabel } from "./lead-generation-pie-chart-label";
import { LeadGenerationPieChartTooltip } from "./lead-generation-pie-chart-tooltip";

type LeadGenerationPieChartProps = {
  isLoading?: boolean;
  data?: z.infer<typeof schemas.LeadGenerationMonth>[];
};

export function LeadGenerationPieChart({
  data,
  isLoading,
}: LeadGenerationPieChartProps) {
  const key = useId();

  const pieProps: React.PropsWithoutRef<Omit<PieProps, "dataKey">> = {
    cx: "50%",
    cy: "50%",
    innerRadius: 85,
    outerRadius: 100,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    paddingAngle: 2,
    cornerRadius: 10,
    startAngle: 85,
    endAngle: 445,
    labelLine: false,
  };

  const {
    quarters,
    checkIsDestructiveMonth,
    checkIsSuccessMonth,
    checkIsSuccessQuarter,
  } = useLeadGenerationPlan({ months: data });

  const months = quarters.flatMap((quarter) => quarter.months);
  const quartersProgress =
    (Math.floor(
      quarters.filter((quarter) => checkIsSuccessQuarter(quarter)).length,
    ) /
      4) *
    100;

  return (
    <PieChart
      key={!isLoading && data ? key : `${key}-loading`}
      width={252}
      height={200}
      className="!~h-[9.375rem]/[12.5rem]"
    >
      {!isLoading && data ? (
        <Pie
          dataKey="v"
          data={months.map((month) => ({ ...month, v: 1 }))}
          animationDuration={600}
          {...pieProps}
        >
          <Label
            position="center"
            content={({ viewBox }) => (
              <LeadGenerationPieChartLabel
                viewBox={viewBox}
                percents={quartersProgress}
              />
            )}
          ></Label>
          {months.map((month) => (
            <Cell
              key={month.idx}
              className={cn("fill-secondary", {
                "fill-primary/30": month.idx === new Date().getMonth(),
                "fill-success": checkIsSuccessMonth(month),
                "fill-destructive": checkIsDestructiveMonth(month),
              })}
            />
          ))}
        </Pie>
      ) : (
        <Pie
          data={Array.from({ length: 12 }, () => ({ value: 1 }))}
          dataKey="value"
          animationDuration={0}
          {...pieProps}
        >
          {Array.from({ length: 12 }, (_, idx) => (
            <Cell key={idx} className="animate-pulse/30 fill-muted/30" />
          ))}
        </Pie>
      )}
      <Tooltip content={LeadGenerationPieChartTooltip} />
    </PieChart>
  );
}
