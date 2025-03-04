import { cn } from "@/shared/lib/cn";
import { useId } from "react";
import { Cell, Pie, PieLabelRenderProps, PieProps } from "recharts";
import { PieChart } from "recharts";

type EmployTestingChartProps<T extends Record<string, unknown>> = {
  data?: T[];
  isLoading?: boolean;
  labelKey: keyof T;
  completedKey?: keyof T;
};

export function EmployeeTestingChart<T extends Record<string, unknown>>({
  labelKey,
  completedKey,
  isLoading,
  data,
}: EmployTestingChartProps<T>) {
  const key = useId();

  const pieProps: React.PropsWithoutRef<Omit<PieProps, "dataKey">> = {
    cx: "50%",
    cy: "40%",
    innerRadius: 65,
    outerRadius: 78,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    paddingAngle: 10,
    cornerRadius: 10,
    startAngle: -25,
    labelLine: false,
  };

  const pieLabel = (params: PieLabelRenderProps & T) => {
    const words = (params[labelKey] as string).split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word: string) => {
      if (currentLine.length + word.length > 10) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine += (currentLine.length === 0 ? "" : " ") + word;
      }
    });

    if (currentLine.length > 0) lines.push(currentLine);

    const RADIAN = Math.PI / 180;
    let radius = Number(params.outerRadius) + 85;

    if (params.midAngle > 180 && params.midAngle < 360)
      radius = Number(params.outerRadius);

    const x = Number(params.cx) + radius * Math.cos(-params.midAngle * RADIAN);
    const y = Number(params.cy) + radius * Math.sin(-params.midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline="middle"
        className="select-none duration-300 animate-in fade-in"
      >
        {lines
          .filter((line) => line !== "")
          .map((line, index) => (
            <tspan x={x} dy={20} key={index}>
              {line}
            </tspan>
          ))}
      </text>
    );
  };

  return (
    <PieChart
      key={!isLoading && data ? key : `${key}-loading`}
      width={450}
      height={215}
      className="!~h-[9.375rem]/[13.4375rem]"
    >
      {!isLoading && data ? (
        <Pie
          data={data.map((item) => ({
            ...item,
            value: 1,
          }))}
          dataKey="value"
          label={pieLabel}
          animationDuration={600}
          {...pieProps}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              className={cn("fill-success", {
                "fill-destructive": completedKey && !entry[completedKey],
              })}
            />
          ))}
        </Pie>
      ) : (
        <Pie
          data={Array.from({ length: 3 }, () => ({ value: 1 }))}
          dataKey="value"
          animationDuration={0}
          {...pieProps}
        >
          {Array(3)
            .fill({ value: 1 })
            .map((_, index) => (
              <Cell
                key={`cell-${index}`}
                className="animate-pulse fill-muted/30"
              />
            ))}
        </Pie>
      )}
    </PieChart>
  );
}
