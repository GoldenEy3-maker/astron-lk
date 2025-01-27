import { EmployeeTestingCard } from "@/features/employee-testing";
import { getEmployeeTestingUploadedYearsQueryOptions } from "@/features/employee-testing";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { YearSelect } from "@/shared/ui/year-select";
import { useQuery } from "@tanstack/react-query";
import { parseAsString, useQueryState } from "nuqs";

export function EmployeeTestingPage() {
  const { data: uploadedYears, isLoading: isUploadedYearsLoading } = useQuery(
    getEmployeeTestingUploadedYearsQueryOptions()
  );

  const [year, setYear] = useQueryState(
    "year",
    parseAsString.withDefault(uploadedYears?.[0] ?? "")
  );

  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Тестирование сотрудников</h1>
        {!isUploadedYearsLoading && uploadedYears ? (
          <YearSelect year={year} setYear={setYear} data={uploadedYears} />
        ) : null}
      </SectionHeader>
      <SectionContent>
        <EmployeeTestingCard year={year} extended />
      </SectionContent>
    </Section>
  );
}
