import { cn } from "@/shared/lib/cn";
import { Cell, Pie } from "recharts";

import { PieChart } from "recharts";

type EmployTestingChartProps<T> = {
  data: T[];
  dataKey: string;
  nameKey: string;
  isDestructive: (entry: T) => boolean;
};

export function EmployeeTestingChart<T>({
  data,
  dataKey,
  nameKey,
  isDestructive,
}: EmployTestingChartProps<T>) {
  return (
    <PieChart width={400} height={215} className="!~h-[9.375rem]/[13.4375rem]">
      <Pie
        data={data}
        dataKey={dataKey}
        nameKey={nameKey}
        cx="50%"
        cy="40%"
        innerRadius={65}
        outerRadius={77}
        strokeLinecap="round"
        strokeLinejoin="round"
        paddingAngle={10}
        cornerRadius={10}
        startAngle={-25}
        // endAngle={444}
        labelLine={false}
        label={(params) => {
          const words = params[nameKey].split(" ");
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
          let radius = params.outerRadius + 80;

          if (params.midAngle > 180 && params.midAngle < 360)
            radius = params.outerRadius;

          const x = params.cx + radius * Math.cos(-params.midAngle * RADIAN);
          // const y =
          //   cy +
          //   radius * Math.sin(-midAngle * RADIAN) +
          //   (midAngle > 180 ? 0 : 0);

          const y = params.cy + radius * Math.sin(-params.midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="currentColor"
              textAnchor="middle"
              dominantBaseline="middle"
              className="animate-in fade-in duration-300">
              {lines
                .filter((line) => line !== "")
                .map((line, index) => (
                  <tspan x={x} dy={20} key={index}>
                    {line}
                  </tspan>
                ))}
            </text>
          );
        }}
        className="fill-foreground">
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            className={cn("fill-success", {
              "fill-destructive": isDestructive(entry),
            })}
          />
        ))}
      </Pie>
    </PieChart>
  );
}
