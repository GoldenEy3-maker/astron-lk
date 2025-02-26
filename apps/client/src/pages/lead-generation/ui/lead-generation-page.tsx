import { getPartnerByIdQueryOptions } from "@/entities/partner";
import {
  LeadGenerationPlanTable,
  getLeadGenerationPlanQueryOptions,
  getLeadGenerationQuarterPassedQueryOptions,
  getLeadGenerationUploadedYearsQueryOptions,
} from "@/features/lead-generation";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { YearSelect } from "@/shared/ui/year-select";
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

  const {
    data: leadGenerationQuarterPassed,
    isLoading: isLeadGenerationQuarterPassedLoading,
  } = useQuery(getLeadGenerationQuarterPassedQueryOptions({ partnerId, year }));

  useBreadcrumbs("partnerId", partner?.title);

  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Результаты лидогенераци</h1>
        {!isUploadedYearsLoading && uploadedYears ? (
          <YearSelect year={year} setYear={setYear} data={uploadedYears} />
        ) : null}
      </SectionHeader>
      <SectionContent>
        <Section space="lg" className="rounded-main bg-card ~px-6/14 ~py-6/9">
          <SectionHeader>
            <h2 className="text-h2 text-heading-h3">Выполнение плана</h2>
          </SectionHeader>
          <SectionContent>
            <LeadGenerationPlanTable
              monthLeads={leadGenerationPlan}
              quarterPassed={leadGenerationQuarterPassed?.reduce<
                Record<number, number>
              >((acc, item) => {
                acc[item.quarter] = item.value;

                return acc;
              }, {})}
              isMonthLeadsLoading={
                isLeadGenerationPlanLoading || isUploadedYearsLoading
              }
              isQuarterPassedLoading={
                isLeadGenerationQuarterPassedLoading || isUploadedYearsLoading
              }
            />
          </SectionContent>
        </Section>
      </SectionContent>
    </Section>
  );
}
