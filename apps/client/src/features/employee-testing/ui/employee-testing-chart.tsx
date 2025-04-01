import { cn } from "@/shared/lib/cn";
import { useId } from "react";
import { PieChart, Cell, Pie, PieLabelRenderProps, PieProps } from "recharts";

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
  const containerWidth = 450;
  const containerHeight = 215;

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
    const padding = 0;

    const isTwoSectors = data?.length === 2;

    let radius = Number(params.outerRadius) + (isTwoSectors ? 180 : 85);

    if (params.midAngle > 180 && params.midAngle < 360)
      radius = Number(params.outerRadius);

    const cx = Number(params.cx);
    const cy = Number(params.cy);
    let angle = -params.midAngle * RADIAN;

    if (isTwoSectors) angle += params.midAngle < 180 ? -5 * RADIAN : 5 * RADIAN;

    let x = cx + radius * Math.cos(angle);
    let y = cy + radius * Math.sin(angle);

    if (isTwoSectors) {
      if (params.midAngle < 180) x += 25;
      else x -= 25;
    }

    let textAnchor: "start" | "end" | "middle" = "middle";

    if (x > containerWidth - padding) {
      x = containerWidth - padding;
      textAnchor = "end";
    } else if (x < padding) {
      x = padding;
      textAnchor = "start";
    }

    if (y > containerHeight - padding) {
      y = containerHeight - padding;
    } else if (y < padding) {
      y = padding;
    }

    return (
      <text
        x={x}
        y={y}
        fill="currentColor"
        textAnchor={textAnchor}
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
      width={containerWidth}
      height={containerHeight}
      key={!isLoading && data ? key : `${key}-loading`}
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
          {Array.from({ length: 3 }, (_, idx) => (
            <Cell key={`cell-${idx}`} className="animate-pulse fill-muted/30" />
          ))}
        </Pie>
      )}
    </PieChart>
  );
}
