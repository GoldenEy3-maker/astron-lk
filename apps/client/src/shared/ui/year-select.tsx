import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Skeleton } from "./skeleton";

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
            {item} год
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function YearSelectSekeleton() {
  return <Skeleton className="h-10 w-32 rounded-xl" />;
}
