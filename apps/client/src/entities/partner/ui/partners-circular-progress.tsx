import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

type CircularProgressProps = {
  value: number;
};

export function CircularProgress({ value }: CircularProgressProps) {
  const normalizedValue = Math.min(Math.max(value, 0), 100);

  const circleSize = 46;
  const barSize = 3;
  const innerRadius = circleSize / 2 - barSize - 2;
  const outerRadius = circleSize / 2 - barSize - 2;

  const data = [
    {
      name: "progress",
      value: normalizedValue,
      fill: "hsl(var(--success))",
    },
  ];

  return (
    <RadialBarChart
      width={circleSize}
      height={circleSize}
      cx={circleSize / 2}
      cy={circleSize / 2}
      startAngle={90}
      endAngle={-270}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      barSize={barSize}
      data={data}>
      <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        dataKey="value"
        background
        cornerRadius={circleSize / 2}
        className="fill-card-accent"
      />
    </RadialBarChart>
  );
}
