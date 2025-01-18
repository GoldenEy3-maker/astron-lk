import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import { useQuery } from "@tanstack/react-query";
import {
  getDocumentsCategoriesQueryOptions,
  GetDocumentsQueryKeys,
} from "../api/documents-query";

type DocumentsCategoryFilterProps = {
  queryKey: GetDocumentsQueryKeys;
  category?: string;
  onCategoryChange?: (category: string) => void;
};

export function DocumentsCategoryFilter({
  queryKey,
  category,
  onCategoryChange,
}: DocumentsCategoryFilterProps) {
  const { data } = useQuery(getDocumentsCategoriesQueryOptions(queryKey));

  return (
    <Select value={category ?? "all"} onValueChange={onCategoryChange}>
      <SelectTrigger variant="link" className="font-normal" size="sm">
        <SelectValue />
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
