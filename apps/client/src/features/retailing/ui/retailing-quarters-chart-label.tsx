import { ViewBox } from "recharts/types/util/types";

type RetailingQuartersChartLabelProps = {
  viewBox?: ViewBox;
  progress: number;
};

export function RetailingQuartersChartLabel({
  viewBox,
  progress,
}: RetailingQuartersChartLabelProps) {
  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
    const { cx, cy } = viewBox as { cx: number; cy: number };
    return (
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
        <tspan
          x={cx}
          y={cy - 8}
          className="fill-foreground text-lg font-medium"
        >
          {progress}%
        </tspan>
        <tspan x={cx} y={cy} dy={12} className="fill-muted">
          от плана
        </tspan>
      </text>
    );
  }
}
