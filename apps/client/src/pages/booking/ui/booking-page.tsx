import { getPartnerByIdQueryOptions } from "@/entities/partner";
import {
  getRetailingListQueryOptions,
  getRetailingUploadedYearsQueryOptions,
  RetailingDaysTable,
  RetailingMonthsTable,
  RetailingQuartersChart,
  useRetailingQuartresPlan,
} from "@/features/retailing";
import { RetailingQuartersTable } from "@/features/retailing/ui/retailing-quarters-table";
import { formatDate } from "@/shared/lib/format-date";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Skeleton } from "@/shared/ui/skeleton";
import { YearSelect, YearSelectSekeleton } from "@/shared/ui/year-select";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import { useQuery } from "@tanstack/react-query";
import { parseAsString, useQueryState } from "nuqs";
import { useParams } from "react-router-dom";

export function BookingPage() {
  const { partnerId } = useParams<{ partnerId: string }>();

  const { data: uploadedYears, isLoading: isUploadedYearsLoading } = useQuery(
    getRetailingUploadedYearsQueryOptions({ type: "booking", partnerId }),
  );

  const [year, setYear] = useQueryState(
    "year",
    parseAsString.withDefault(uploadedYears?.[0] ?? ""),
  );

  const { data: partner } = useQuery({
    ...getPartnerByIdQueryOptions(partnerId!),
    enabled: !!partnerId,
  });

  const { isQuartersPlanLoading, quartersPlan, progress, yearFact } =
    useRetailingQuartresPlan({
      type: "booking",
      partnerId,
      year,
    });

  const { data: retailingList, isLoading: isRetailingListLoading } = useQuery(
    getRetailingListQueryOptions({ type: "booking", partnerId, year }),
  );

  useBreadcrumbs("partnerId", partner?.title);

  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Букинги</h1>
        {!isUploadedYearsLoading && uploadedYears ? (
          <YearSelect year={year} setYear={setYear} data={uploadedYears} />
        ) : (
          <YearSelectSekeleton />
        )}
      </SectionHeader>
      <SectionContent>
        <Section space="lg" className="rounded-main bg-card ~px-6/14 ~py-6/9">
          <SectionHeader className="items-center gap-y-2">
            {!isQuartersPlanLoading && quartersPlan?.uploadedAt ? (
              <h2 className="text-h2 text-heading-h3">
                Результаты выгрузки{" "}
                {formatDate(
                  new Date(new Date().setHours(12, 0, 0, 0)),
                  "dd.MM.yyyy",
                )}
              </h2>
            ) : (
              <Skeleton className="max-w-full rounded-full ~h-7/[2.625rem] ~w-[22.125rem]/[29.75rem]" />
            )}
            {quartersPlan?.updatedAt ? (
              <span className="text-lg text-muted">
                Обновлён{" "}
                {formatDate(new Date(quartersPlan.updatedAt), "dd.MM.yyyy")}
              </span>
            ) : (
              <Skeleton className="h-7 w-44 rounded-full" />
            )}
          </SectionHeader>
          <SectionContent className="space-y-6">
            <RetailingQuartersChart
              extended
              progress={progress}
              fact={yearFact}
            />
            <RetailingQuartersTable
              data={quartersPlan?.data}
              isLoading={isQuartersPlanLoading}
            />
          </SectionContent>
        </Section>
        <Section space="lg" className="rounded-main bg-card ~px-6/14 ~py-6/9">
          <SectionHeader>
            <h2 className="text-h2 text-heading-h3">Букинги по месяцам</h2>
          </SectionHeader>
          <SectionContent>
            <RetailingMonthsTable
              data={retailingList}
              isLoading={isRetailingListLoading}
            />
          </SectionContent>
        </Section>
        <Section space="lg" className="rounded-main bg-card ~px-6/14 ~py-6/9">
          <SectionHeader>
            <h2 className="text-h2 text-heading-h3">Букинги по дням</h2>
          </SectionHeader>
          <SectionContent>
            <RetailingDaysTable
              data={retailingList}
              isLoading={isRetailingListLoading}
            />
          </SectionContent>
        </Section>
      </SectionContent>
    </Section>
  );
}
