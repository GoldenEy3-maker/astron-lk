import {
  DataPeriodSelectKeyMap,
  DataPeriodSelectKeyToValueMap,
} from "../constants/data-perido-select-maps";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

type DataPeriodSelectProps = {
  value: DataPeriodSelectKeyMap;
  onValueChange: (value: DataPeriodSelectKeyMap) => void;
} & Omit<React.ComponentProps<typeof Select>, "value" | "onValueChange">;

export function DataPeriodSelect({
  value,
  onValueChange,
  defaultValue = "year",
  ...props
}: DataPeriodSelectProps) {
  return (
    <Select
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      {...props}>
      <SelectTrigger variant="outline" size="sm" className="font-normal">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {Object.entries(DataPeriodSelectKeyToValueMap).map(([key, value]) => (
          <SelectItem key={key} value={key}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
