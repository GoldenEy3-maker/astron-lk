import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import { TextMorph } from "@/shared/ui/text-morph";
import {
  BulletinsSortKeys,
  TranslateBulletinsSortKeys,
} from "../model/bulletins-sort-keys";

type BulletinsSortProps = {
  sort?: BulletinsSortKeys;
  onSortChange?: (sort: BulletinsSortKeys) => void;
  options: BulletinsSortKeys[];
};

export function BulletinsSort({
  sort,
  onSortChange,
  options,
}: BulletinsSortProps) {
  return (
    <Select value={sort ?? "latest"} onValueChange={onSortChange}>
      <SelectTrigger
        variant="outline"
        className="font-normal bg-transparent"
        size="sm">
        <SelectValue>
          <TextMorph as="span">
            {TranslateBulletinsSortKeys[sort ?? "latest"]}
          </TextMorph>
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {TranslateBulletinsSortKeys[option]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
