import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { useLeadGenerationPlan } from "../lib/use-lead-generation-plan";
import { z } from "zod";
import { schemas } from "@/shared/api/v1";
import { cn } from "@/shared/lib/cn";

type QuarterPassed = { quarter: number; value: number | null };

type LeadGenerationBarChartProps = {
  data?: {
    months: z.infer<typeof schemas.LeadGenerationMonth>[];
    quarterPassed: QuarterPassed[];
  };
  isLoading?: boolean;
};

export function LeadGenerationBarChart({
  data,
  isLoading,
}: LeadGenerationBarChartProps) {
  const { quarters, checkIsSuccessQuarter, checkIsDestructiveQuarter } =
    useLeadGenerationPlan({
      months: data?.months,
    });

  const defaultMax = 10;

  const maxValue = data?.quarterPassed.reduce((acc, quarter) => {
    if (quarter.value && acc < quarter.value) return quarter.value;

    return acc;
  }, 0);

  return (
    <BarChart
      data={
        data?.quarterPassed ??
        Array.from({ length: 4 }, (_, idx) => ({
          quarter: idx + 1,
          value: Math.floor(Math.random() * 10),
        }))
      }
      layout="vertical"
      width={420}
      height={220}
      className="rounded-main border border-stroke bg-card !~h-[10rem]/[13.75rem] ~px-3/5 ~py-2/5"
    >
      <YAxis
        dataKey={(item: QuarterPassed) => {
          return `${item.quarter} кв`;
        }}
        type="category"
        axisLine={false}
        tickLine={false}
        tickMargin={30}
      />
      <XAxis
        dataKey="value"
        type="number"
        orientation="bottom"
        axisLine={false}
        tickLine={false}
        interval={0}
        tickCount={maxValue ? maxValue + 1 : defaultMax + 1}
        allowDataOverflow
        domain={[0, (dataMax: number | undefined) => dataMax || defaultMax]}
      />
      <CartesianGrid horizontal={false} strokeDasharray="13" />
      <Bar dataKey="value" minPointSize={0} barSize={25} radius={20}>
        {quarters.map((quarter) => (
          <Cell
            key={quarter.quarter}
            className={cn("fill-secondary", {
              "animate-pulse/30 fill-muted/30": isLoading || !data,
              "fill-success": checkIsSuccessQuarter(quarter),
              "fill-destructive": checkIsDestructiveQuarter(quarter),
            })}
          />
        ))}
      </Bar>
    </BarChart>
  );
}
