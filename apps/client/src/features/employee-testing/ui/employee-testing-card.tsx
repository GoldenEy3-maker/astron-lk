import { EmployeeTestingChart } from "./employee-testing-chart";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { EmployeeTestingTable } from "./employee-testing-table";
import { useEmployeeTesting } from "../lib/use-employee-testing";
import { formatDate } from "@/shared/lib/format-date";
import { YearSelect, YearSelectSekeleton } from "@/shared/ui/year-select";
import { Skeleton } from "@/shared/ui/skeleton";

type EmployeeTestingCardProps = {
  year?: string | null;
  onYearChange?: (year: string) => void;
  extended?: boolean;
  partnerId?: string;
};

export function EmployeeTestingCard({
  year,
  onYearChange,
  extended = false,
  partnerId,
}: EmployeeTestingCardProps) {
  const {
    controlledYear,
    setControlledYear,
    data,
    chartData,
    uploadedAt,
    updatedAt,
    isLoading,
    uploadedYears,
    isUploadedYearsLoading,
  } = useEmployeeTesting({
    year,
    onYearChange,
    partnerId,
  });

  return (
    <Section space="lg" className="rounded-main bg-card ~px-6/14 ~py-6/9">
      <SectionHeader className="items-center gap-y-2">
        {extended ? (
          <>
            {!isLoading && uploadedAt ? (
              <h2 className="text-h2 text-heading-h3">
                Результаты выгрузки{" "}
                {formatDate(
                  new Date(new Date(uploadedAt).setHours(12, 0, 0, 0)),
                  "dd.MM.yyyy",
                )}
              </h2>
            ) : (
              <Skeleton className="max-w-full rounded-full ~h-7/[2.625rem] ~w-[22.125rem]/[29.75rem]" />
            )}
            {updatedAt ? (
              <span className="text-lg text-muted">
                Обновлён {formatDate(new Date(updatedAt), "dd.MM.yyyy")}
              </span>
            ) : (
              <Skeleton className="h-7 w-44 rounded-full" />
            )}
          </>
        ) : (
          <>
            <Button
              asChild
              variant="link"
              size="hug"
              className="items-center font-normal ~gap-1.5/3"
            >
              <Link
                to={
                  (partnerId
                    ? `${Routes.Partners}/${partnerId}${Routes.EmployeeTesting}`
                    : Routes.EmployeeTesting) + `?year=${controlledYear}`
                }
                className="text-h3 leading-none"
              >
                <span>Тестирование сотрудников</span>
                <Icons.ArrowRight className="~size-4/6" />
              </Link>
            </Button>
            {!isUploadedYearsLoading && uploadedYears ? (
              <YearSelect
                year={controlledYear}
                setYear={setControlledYear}
                data={uploadedYears}
              />
            ) : (
              <YearSelectSekeleton />
            )}
          </>
        )}
      </SectionHeader>
      <SectionContent className="space-y-5">
        <div className="flex justify-center">
          <EmployeeTestingChart
            data={chartData}
            labelKey="name"
            completedKey="isCompleted"
            isLoading={isLoading}
          />
        </div>
        <EmployeeTestingTable
          data={extended ? data : data?.slice(0, 3)}
          isLoading={isLoading}
        />
      </SectionContent>
    </Section>
  );
}
