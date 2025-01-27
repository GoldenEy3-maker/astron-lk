import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

type YearSelectProps = {
  year?: string;
  setYear?: (year: string) => void;
  data: string[];
};

export function YearSelect({ year, setYear, data }: YearSelectProps) {
  return (
    <Select value={year} onValueChange={setYear}>
      <SelectTrigger variant="outline" size="sm" className="font-normal">
        <SelectValue placeholder="Выберите год" />
      </SelectTrigger>
      <SelectContent align="end">
        {data.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
