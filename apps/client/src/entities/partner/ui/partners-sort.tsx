import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import {
  PartnersSortKeyMap,
  PartnersSortKeyToValueMap,
} from "../constants/partners-sort-maps";
import { useControllableState } from "@/shared/lib/use-controllable-state";

type PartnersSortProps = {
  value?: PartnersSortKeyMap;
  onChange?: (value: PartnersSortKeyMap) => void;
};

export function PartnersSort({ value, onChange }: PartnersSortProps) {
  const [sort, setSort] = useControllableState<PartnersSortKeyMap>({
    defaultProp: "asc-sales",
    prop: value,
    onChange,
  });

  return (
    <Select
      value={sort}
      onValueChange={(value) => setSort(value as PartnersSortKeyMap)}>
      <SelectTrigger className="font-normal" variant="outline" size="sm">
        <SelectValue placeholder="Сортировать по" />
      </SelectTrigger>
      <SelectContent align="end">
        {Object.entries(PartnersSortKeyToValueMap).map(([key, value]) => (
          <SelectItem key={key} value={key}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
