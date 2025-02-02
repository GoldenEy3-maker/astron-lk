import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { schemas } from "@/shared/api/v1";

type PartnersSelectProps = {
  selectedId?: string;
  data: z.infer<typeof schemas.PartnerInSelect>[];
};

export function PartnersSelect({ data, selectedId }: PartnersSelectProps) {
  const navigate = useNavigate();

  return (
    <Select
      onValueChange={(id) => {
        navigate(`/partners/${id}`);
      }}
      value={selectedId}
    >
      <SelectTrigger
        variant="outline"
        size="sm"
        className="!whitespace-normal font-normal"
      >
        <SelectValue placeholder="Выберите партнера" />
      </SelectTrigger>
      <SelectContent align="end">
        {data?.map((partner) => (
          <SelectItem key={partner.id} value={partner.id}>
            {partner.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
