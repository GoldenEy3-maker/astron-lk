import { schemas } from "@/shared/api/v1";
import { Cell, Pie, PieChart, PieProps, Tooltip } from "recharts";
import { z } from "zod";
import { useLeadGenerationPlan } from "../lib/use-lead-generation-plan";
import { cn } from "@/shared/lib/cn";
import { enumerate } from "@/shared/lib/enumerate";

type LeadGenerationPieChartProps = {
  data?: z.infer<typeof schemas.LeadGenerationMonth>[];
};

export function LeadGenerationPieChart({ data }: LeadGenerationPieChartProps) {
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
    renderMonth,
    checkIsDestructiveMonth,
    checkIsSuccessMonth,
  } = useLeadGenerationPlan({ months: data });

  const months = quarters.flatMap((quarter) => quarter.months);

  return (
    <PieChart width={252} height={200}>
      <Pie
        dataKey="v"
        data={months.map((month) => ({ ...month, v: 1 }))}
        {...pieProps}
      >
        {months.map((month) => (
          <Cell
            key={month.idx}
            className={cn("fill-secondary", {
              "fill-success": checkIsSuccessMonth(month),
              "fill-destructive": checkIsDestructiveMonth(month),
            })}
          />
        ))}
      </Pie>
      <Tooltip
        content={({ payload, active }) => {
          const cellData = payload?.[0]?.payload;

          if (!cellData || !active) return null;

          const { value, idx } = cellData;

          if (!value) return null;

          return (
            <div className="flex flex-col rounded-lg bg-card px-3 py-1.5 text-sm shadow-[0_0_0.625rem_0] shadow-black/10">
              <span className="capitalize">
                {renderMonth(idx, { month: "long" })}
              </span>
              <span className="text-muted">
                {value} {enumerate(value, ["лид", "лида", "лидов"])}
              </span>
            </div>
          );
        }}
      />
    </PieChart>
  );
}
