import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import { useQuery } from "@tanstack/react-query";
import { getDocumentsCategoriesQueryOptions } from "../api/documents-query";
import { TextMorph } from "@/shared/ui/text-morph";

type DocumentsCategoryFilterProps = {
  category?: string;
  onCategoryChange?: (category: string) => void;
};

export function DocumentsCategoryFilter({
  category,
  onCategoryChange,
}: DocumentsCategoryFilterProps) {
  const { data } = useQuery(getDocumentsCategoriesQueryOptions());

  return (
    <Select value={category ?? "all"} onValueChange={onCategoryChange}>
      <SelectTrigger variant="ghost-primary" className="font-normal" size="sm">
        <SelectValue>
          <TextMorph as="span">
            {category === "all" ? "Все категории" : category ?? "Все категории"}
          </TextMorph>
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="all">Все категории</SelectItem>
        {data?.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
