import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import { useQuery } from "@tanstack/react-query";
import { getBulletinsCategoriesQueryOptions } from "../api/bulletins-query";
import { TextMorph } from "@/shared/ui/text-morph";

type BulletinsCategoryFilterProps = {
  category?: string;
  onCategoryChange?: (category: string) => void;
};

export function BulletinsCategoryFilter({
  category,
  onCategoryChange,
}: BulletinsCategoryFilterProps) {
  const { data } = useQuery(getBulletinsCategoriesQueryOptions());

  return (
    <Select value={category ?? "all"} onValueChange={onCategoryChange}>
      <SelectTrigger variant="link" className="font-normal" size="sm">
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
