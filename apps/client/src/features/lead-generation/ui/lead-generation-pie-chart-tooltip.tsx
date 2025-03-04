import { enumerate } from "@/shared/lib/enumerate";
import { formatMonthByIdx } from "@/shared/lib/format-date";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { TooltipProps } from "recharts/types/component/Tooltip";

type LeadGenerationPieChartTooltipProps = TooltipProps<ValueType, NameType>;

export function LeadGenerationPieChartTooltip({
  payload,
  active,
}: LeadGenerationPieChartTooltipProps) {
  const cellData = payload?.[0]?.payload;

  if (!cellData || !active) return null;

  const { value, idx } = cellData;

  if (!value) return null;

  return (
    <div className="flex flex-col rounded-lg bg-card px-3 py-1.5 text-sm shadow-[0_0_0.625rem_0] shadow-black/10">
      <span className="capitalize">{formatMonthByIdx(idx, "long")}</span>
      <span className="text-muted">
        {value} {enumerate(value, ["лид", "лида", "лидов"])}
      </span>
    </div>
  );
}
