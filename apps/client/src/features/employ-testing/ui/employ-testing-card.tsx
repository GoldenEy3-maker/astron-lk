import { cn } from "@/shared/lib/cn";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Специалист по монтажу", value: 1, isCompleted: true },
  { name: "Специалист по продажам", value: 1, isCompleted: false },
  { name: "Инженер-расчётчик", value: 1, isCompleted: true },
];

export function EmployTestingCard() {
  return (
    <div className="rounded-main bg-card py-9 px-14">
      <div className="flex justify-center">
        <PieChart width={600} height={200}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={65}
            strokeLinecap="round"
            strokeLinejoin="round"
            paddingAngle={10}
            cornerRadius={10}
            startAngle={95}
            endAngle={500}
            labelLine={false}
            label={({ name }) => name}
            fill="#82ca9d">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                className={cn("fill-success", {
                  "fill-destructive": !entry.isCompleted,
                })}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}
