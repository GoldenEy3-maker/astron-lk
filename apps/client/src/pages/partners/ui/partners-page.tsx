import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { getPartnersUploadedDateQueryOptions } from "../api/partners-query";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/shared/lib/format-date";
import { Skeleton } from "@/shared/ui/skeleton";
import { PartnersList, PartnersSort } from "@/entities/partner";
import { parseAsStringEnum, useQueryState } from "nuqs";
import { PartnersSortKeyMap } from "@/entities/partner";

export function PartnersPage() {
  const [sort, setSort] = useQueryState(
    "sort",
    parseAsStringEnum(Object.values(PartnersSortKeyMap)).withDefault(
      "asc-sales"
    )
  );

  const { data: uploadedDate, isLoading: isUploadedDateLoading } = useQuery(
    getPartnersUploadedDateQueryOptions()
  );

  return (
    <Section space="md" className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Партнеры-Строители</h1>
        {!isUploadedDateLoading && uploadedDate ? (
          <span className="text-muted">
            Результаты выгрузки от{" "}
            {formatDate(new Date(uploadedDate), "dd.MM.yyyy")}
          </span>
        ) : (
          <Skeleton className="w-1/4 h-4 rounded-full" />
        )}
      </SectionHeader>
      <SectionContent className="bg-card rounded-main py-9 px-14">
        <div className="flex flex-col items-end gap-y-5">
          <PartnersSort value={sort} onChange={setSort} />
          <PartnersList sort={sort} />
        </div>
      </SectionContent>
    </Section>
  );
}
