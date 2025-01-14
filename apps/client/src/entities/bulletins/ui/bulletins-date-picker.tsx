import { dateFormat } from "@/shared/lib/date-format";
import { Calendar } from "@/shared/ui/calendar";
import { Icons } from "@/shared/ui/icons";
import { Popover, PopoverTrigger } from "@/shared/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { useState } from "react";
import { DateRange } from "react-day-picker";

type BulletinsDatePickerProps = {
  onPickerClose?: (date: DateRange | undefined) => void;
  defaultFromDate?: Date;
  defaultToDate?: Date;
};

export function BulletinsDatePicker({
  onPickerClose,
  defaultFromDate,
  defaultToDate,
}: BulletinsDatePickerProps) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: defaultFromDate,
    to: defaultToDate,
  });

  return (
    <Popover
      onOpenChange={(open) => {
        if (!open) onPickerClose?.(date);
      }}>
      <PopoverTrigger
        variant="outline"
        className="font-normal bg-card text-muted basis-80 text-sm justify-between">
        {date?.from ? (
          date.to ? (
            <>
              {dateFormat(date.from, "dd.MM.yyyy")} -{" "}
              {dateFormat(date.to, "dd.MM.yyyy")}
            </>
          ) : (
            dateFormat(date.from, "dd.MM.yyyy")
          )
        ) : (
          <span>Выберите дату</span>
        )}
        <Icons.Calendar />
      </PopoverTrigger>
      <PopoverContent className="z-20" align="start" sideOffset={4}>
        <Calendar
          initialFocus
          mode="range"
          selected={date}
          onSelect={setDate}
          defaultMonth={date?.from}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
