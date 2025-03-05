import { getPartnerByIdQueryOptions } from "@/entities/partner";
import {
  LeadGenerationPlanTable,
  getLeadGenerationListQueryOptions,
  getLeadGenerationPlanQueryOptions,
  getLeadGenerationUploadedYearsQueryOptions,
  LeadGenerationPieChart,
  LeadGenerationListTable,
} from "@/features/lead-generation";
import { LeadGenerationBarChart } from "@/features/lead-generation/ui/lead-generation-bar-chart";
import { formatDate } from "@/shared/lib/format-date";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Skeleton } from "@/shared/ui/skeleton";
import { YearSelect, YearSelectSekeleton } from "@/shared/ui/year-select";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import { useQuery } from "@tanstack/react-query";
import { parseAsString, useQueryState } from "nuqs";
import { useParams } from "react-router-dom";

export function LeadGenerationPage() {
  const { partnerId } = useParams<{ partnerId: string }>();

  const { data: uploadedYears, isLoading: isUploadedYearsLoading } = useQuery(
    getLeadGenerationUploadedYearsQueryOptions(),
  );

  const [year, setYear] = useQueryState(
    "year",
    parseAsString.withDefault(uploadedYears?.[0] ?? ""),
  );

  const { data: partner } = useQuery({
    ...getPartnerByIdQueryOptions(partnerId!),
    enabled: !!partnerId,
  });

  const { data: leadGenerationPlan, isLoading: isLeadGenerationPlanLoading } =
    useQuery(getLeadGenerationPlanQueryOptions({ partnerId, year }));

  const { data: leadGeneration, isLoading: isLeadGenerationLoading } = useQuery(
    getLeadGenerationListQueryOptions({ partnerId, year }),
  );

  useBreadcrumbs("partnerId", partner?.title);

  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Результаты лидогенераци</h1>
        {!isUploadedYearsLoading && uploadedYears ? (
          <YearSelect year={year} setYear={setYear} data={uploadedYears} />
        ) : (
          <YearSelectSekeleton />
        )}
      </SectionHeader>
      <SectionContent>
        <Section space="lg" className="rounded-main bg-card ~px-6/14 ~py-6/9">
          <SectionHeader className="items-center gap-y-2">
            {!isLeadGenerationLoading && leadGeneration?.uploadedAt ? (
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
            {leadGeneration?.updatedAt ? (
              <span className="text-lg text-muted">
                Обновлён{" "}
                {formatDate(new Date(leadGeneration.updatedAt), "dd.MM.yyyy")}
              </span>
            ) : (
              <Skeleton className="h-7 w-44 rounded-full" />
            )}
          </SectionHeader>
          <SectionContent className="space-y-5">
            <div className="flex flex-wrap justify-center gap-y-8 ~m-md/2xl:~gap-x-5/14 m-md:flex-nowrap">
              <LeadGenerationPieChart
                data={leadGenerationPlan?.months}
                isLoading={isLeadGenerationPlanLoading}
              />
              <LeadGenerationBarChart
                data={leadGenerationPlan}
                isLoading={isLeadGenerationPlanLoading}
              />
            </div>
            <LeadGenerationListTable
              data={leadGeneration}
              isLoading={isLeadGenerationLoading}
            />
          </SectionContent>
        </Section>
        <Section space="lg" className="rounded-main bg-card ~px-6/14 ~py-6/9">
          <SectionHeader>
            <h2 className="text-h2 text-heading-h3">Выполнение плана</h2>
          </SectionHeader>
          <SectionContent>
            <LeadGenerationPlanTable
              data={leadGenerationPlan}
              isLoading={isLeadGenerationPlanLoading || isUploadedYearsLoading}
            />
          </SectionContent>
        </Section>
      </SectionContent>
    </Section>
  );
}
