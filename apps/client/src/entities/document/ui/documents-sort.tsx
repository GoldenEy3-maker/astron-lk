import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import { TextMorph } from "@/shared/ui/text-morph";

import {
  DocumentsSortKeys,
  TranslateDocumentsSortKeys,
} from "../model/documents-sort-keys";

type DocumentsSortProps = {
  sort?: DocumentsSortKeys;
  onSortChange?: (sort: DocumentsSortKeys) => void;
  options: DocumentsSortKeys[];
};

export function DocumentsSort({
  sort,
  onSortChange,
  options,
}: DocumentsSortProps) {
  return (
    <Select value={sort ?? "latest"} onValueChange={onSortChange}>
      <SelectTrigger variant="outline" className="font-normal" size="sm">
        <SelectValue>
          <TextMorph as="span">
            {TranslateDocumentsSortKeys[sort ?? "latest"]}
          </TextMorph>
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {TranslateDocumentsSortKeys[option]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
