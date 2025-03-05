import { ViewBox } from "recharts/types/util/types";

type LeadGenerationPieChartLabelProps = {
  viewBox?: ViewBox;
  percents: number;
};

export function LeadGenerationPieChartLabel({
  viewBox,
  percents,
}: LeadGenerationPieChartLabelProps) {
  const { cx, cy } = viewBox as { cx: number; cy: number };

  return (
    <text
      x={cx}
      y={cy}
      className="duration-300 animate-in fade-in-0"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      <tspan x={cx} y={cy} dy={-16} className="font-medium">
        {percents}%
      </tspan>
      <tspan x={cx} y={cy} dy={6} className="fill-muted">
        выполнения
      </tspan>
      <tspan x={cx} y={cy} dy={28} className="fill-muted">
        за год
      </tspan>
    </text>
  );
}
