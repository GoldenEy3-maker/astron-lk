import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import {
  DocumentsSortKeyMap,
  DocumentsSortKeyToValueMap,
} from "../constants/documents-sort-maps";

type DocumentsSortProps = {
  sort?: DocumentsSortKeyMap;
  onSortChange?: (sort: DocumentsSortKeyMap) => void;
  options: DocumentsSortKeyMap[];
};

export function DocumentsSort({
  sort,
  onSortChange,
  options,
}: DocumentsSortProps) {
  return (
    <Select value={sort ?? "latest"} onValueChange={onSortChange}>
      <SelectTrigger variant="outline" className="font-normal" size="sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {DocumentsSortKeyToValueMap[option]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
