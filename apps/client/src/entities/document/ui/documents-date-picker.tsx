import { formatDate } from "@/shared/lib/format-date";
import { Calendar } from "@/shared/ui/calendar";
import { Icons } from "@/shared/ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { DateRange } from "react-day-picker";

type DocumentsDatePickerProps = {
  date?: DateRange;
  onDateChange?: (date: DateRange | undefined) => void;
};

export function DocumentsDatePicker({
  date,
  onDateChange,
}: DocumentsDatePickerProps) {
  // const [date, setDate] = useState<DateRange | undefined>(undefined);

  // useEffect(() => {
  //   if (!date?.from && !date?.to) {
  //     setDate({
  //       from: defaultFromDate,
  //       to: defaultToDate,
  //     });
  //   }
  // }, [defaultFromDate, defaultToDate]);

  return (
    <Popover
    // onOpenChange={(open) => {
    //   if (!open) onPickerClose?.(date);
    // }}
    >
      <PopoverTrigger
        variant="outline"
        className="font-normal bg-card text-muted basis-80 text-sm justify-between">
        {date?.from ? (
          date.to ? (
            <>
              {formatDate(date.from, "dd.MM.yyyy")} -{" "}
              {formatDate(date.to, "dd.MM.yyyy")}
            </>
          ) : (
            formatDate(date.from, "dd.MM.yyyy")
          )
        ) : (
          <span>Выберите дату</span>
        )}
        <Icons.Calendar />
      </PopoverTrigger>
      <PopoverContent className="!w-auto p-0 z-20" align="start" sideOffset={4}>
        <Calendar
          initialFocus
          mode="range"
          selected={date}
          onSelect={onDateChange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
