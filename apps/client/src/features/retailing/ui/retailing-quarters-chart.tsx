import {
  Label,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { RetailingQuartersChartLabel } from "./retailing-quarters-chart-label";
import { cn } from "@/shared/lib/cn";
import { RetailingQuartersChartDatalist } from "./retailing-quarters-chart-datalist";

type RetailingQuartersChartsProps = {
  fact?: number;
  plan?: number;
  progress?: number;
  extended?: boolean;
  isLoading?: boolean;
};

export function RetailingQuartersChart({
  fact,
  plan,
  progress,
  extended,
  isLoading,
}: RetailingQuartersChartsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 grid-rows-[1fr_auto] place-items-center",
        {
          "grid-rows-[1fr_auto] gap-y-4 sm:[grid-template-areas:'stack']":
            extended,
          "~gap-y-4/9": !extended,
        },
      )}
    >
      <RadialBarChart
        width={200}
        height={200}
        data={[{ progress: progress ?? 0 }]}
        startAngle={90}
        endAngle={-270}
        innerRadius={90}
        outerRadius={120}
        className={cn("!~h-[9.375rem]/[12.5rem]", {
          "sm:[grid-area:stack]": extended,
        })}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-card-accent last:fill-card"
          polarRadius={[90, 120]}
        />
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          dataKey="progress"
          background
          animationDuration={600}
          cornerRadius={10}
          className="fill-success"
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          {!extended ? (
            <Label
              content={({ viewBox }) => (
                <RetailingQuartersChartLabel
                  viewBox={viewBox}
                  progress={progress ?? 0}
                />
              )}
            />
          ) : null}
        </PolarRadiusAxis>
      </RadialBarChart>
      <RetailingQuartersChartDatalist
        extended={extended}
        fact={fact}
        isLoading={isLoading}
        plan={plan}
        progress={progress}
      />
    </div>
  );
}
