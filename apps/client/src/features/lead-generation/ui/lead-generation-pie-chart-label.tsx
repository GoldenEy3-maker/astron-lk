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
    <svg
      className="duration-300 animate-in fade-in-0"
      textAnchor="center"
      dominantBaseline="central"
    >
      <text x={cx} y={cy} dy={-16} textAnchor="middle" className="font-medium">
        {percents}%
      </text>
      <text x={cx} y={cy} textAnchor="middle" dy={6} className="fill-muted">
        выполнения
      </text>
      <text x={cx} y={cy} textAnchor="middle" dy={28} className="fill-muted">
        за год
      </text>
    </svg>
  );
}
