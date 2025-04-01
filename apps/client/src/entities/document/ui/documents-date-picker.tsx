import { formatDate } from "@/shared/lib/format-date";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import { Icons } from "@/shared/ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { DateRange } from "react-day-picker";
import { useMediaQuery } from "usehooks-ts";

type DocumentsDatePickerProps = {
  date?: DateRange;
  onDateChange?: (date: DateRange | undefined) => void;
};

export function DocumentsDatePicker({
  date,
  onDateChange,
}: DocumentsDatePickerProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <Popover>
      <div className="relative flex basis-80 items-stretch rounded-xl bg-card">
        <PopoverTrigger
          variant="outline"
          className="w-full justify-start bg-card text-sm font-normal text-muted"
        >
          <Icons.Calendar />
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
        </PopoverTrigger>
        {date && (date.from || date.to) ? (
          <Button
            className="absolute right-2 top-1/2 min-h-0 -translate-y-1/2 rounded-md text-muted hover:text-foreground"
            size="icon-sm"
            onClick={() => onDateChange?.({ from: undefined, to: undefined })}
            variant="ghost"
          >
            <Icons.X className="size-3" />
          </Button>
        ) : null}
      </div>
      <PopoverContent className="z-20 !w-auto p-0" align="start" sideOffset={4}>
        <Calendar
          initialFocus
          mode="range"
          selected={date}
          onSelect={onDateChange}
          numberOfMonths={isMobile ? 1 : 2}
        />
      </PopoverContent>
    </Popover>
  );
}
