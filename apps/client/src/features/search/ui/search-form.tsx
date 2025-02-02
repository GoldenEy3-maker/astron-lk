import { enumerate } from "@/shared/lib/enumerate";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

type SearchFormProps = {
  query: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  totalResults?: number;
  isLoading?: boolean;
};

export function SearchForm({
  query,
  value,
  onChange,
  onSubmit,
  totalResults,
  isLoading,
}: SearchFormProps) {
  return (
    <div className="flex flex-col ~gap-1/3">
      <form
        className="relative flex"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="search"
          placeholder="Поиск"
          wrapperClassName="w-full"
          className="h-12 w-full pr-28"
          trailingIconClassName="right-[5.4rem]"
          onClear={() => onChange("")}
        />
        <div className="absolute inset-y-0 right-0">
          <Button
            variant="link"
            size="sm"
            type="submit"
            disabled={isLoading}
            className="relative h-full rounded-l-none pl-3 pr-6 before:absolute before:inset-x-0 before:inset-y-3 before:border-l before:border-border/40"
          >
            Найти
          </Button>
        </div>
      </form>
      {query && totalResults ? (
        <span className="text-sm text-muted">
          {totalResults}{" "}
          {enumerate(totalResults, ["результат", "результата", "результатов"])}
        </span>
      ) : null}
    </div>
  );
}
