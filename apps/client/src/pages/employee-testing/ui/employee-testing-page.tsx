import { getPartnerByIdQueryOptions } from "@/entities/partner";
import { EmployeeTestingCard } from "@/features/employee-testing";
import { getEmployeeTestingUploadedYearsQueryOptions } from "@/features/employee-testing";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { YearSelect } from "@/shared/ui/year-select";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import { useQuery } from "@tanstack/react-query";
import { parseAsString, useQueryState } from "nuqs";
import { useParams } from "react-router-dom";

export function EmployeeTestingPage() {
  const { partnerId } = useParams<{ partnerId: string }>();

  const { data: uploadedYears, isLoading: isUploadedYearsLoading } = useQuery(
    getEmployeeTestingUploadedYearsQueryOptions(),
  );

  const [year, setYear] = useQueryState(
    "year",
    parseAsString.withDefault(uploadedYears?.[0] ?? ""),
  );

  const { data: partner } = useQuery({
    ...getPartnerByIdQueryOptions(partnerId!),
    enabled: !!partnerId,
  });

  useBreadcrumbs("partnerId", partner?.title);

  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Тестирование сотрудников</h1>
        {!isUploadedYearsLoading && uploadedYears ? (
          <YearSelect year={year} setYear={setYear} data={uploadedYears} />
        ) : null}
      </SectionHeader>
      <SectionContent>
        <EmployeeTestingCard
          year={year}
          onYearChange={setYear}
          partnerId={partnerId}
          extended
        />
      </SectionContent>
    </Section>
  );
}
