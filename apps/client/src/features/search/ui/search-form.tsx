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
        className="flex relative"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="search"
          placeholder="Поиск"
          wrapperClassName="w-full"
          className="w-full h-12 pr-28"
          trailingIconClassName="right-[4.6rem]"
          onClear={() => onChange("")}
        />
        <div className="absolute right-0 inset-y-0">
          <Button
            variant="link"
            size="sm"
            type="submit"
            disabled={isLoading}
            className="relative h-full before:absolute before:inset-x-0 before:inset-y-3 before:border-l before:border-border/40 rounded-l-none">
            Найти
          </Button>
        </div>
      </form>
      {query && totalResults ? (
        <span className="text-sm text-muted">{totalResults} результатов</span>
      ) : null}
    </div>
  );
}
