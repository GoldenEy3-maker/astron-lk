import { EmployeeTestingCard } from "@/features/employee-testing";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { getKpiUploadedDate } from "../api/kpi-query";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/shared/ui/skeleton";
import { formatDate } from "@/shared/lib/format-date";
import { LeadGenerationCard } from "@/features/lead-generation";
import { RetailingCard } from "@/features/retailing";
import { Routes } from "@/shared/constants/routes";

type KpiProps = {
  partnerId?: string;
} & React.ComponentProps<typeof Section>;

export function Kpi({ partnerId, ...props }: KpiProps) {
  const { data, isLoading } = useQuery(getKpiUploadedDate(partnerId));

  return (
    <Section space="lg" {...props}>
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Выполнение KPI</h1>
        {!isLoading && data ? (
          <span className="text-muted">
            Результаты выгрузки от {formatDate(new Date(data), "dd.MM.yyyy")}
          </span>
        ) : (
          <Skeleton className="h-6 w-64 rounded-full" />
        )}
      </SectionHeader>
      <SectionContent>
        <EmployeeTestingCard partnerId={partnerId} />
        <LeadGenerationCard partnerId={partnerId} />
        <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
          <RetailingCard
            detailHref={
              partnerId
                ? `${Routes.Partners}/${partnerId}${Routes.Sales}`
                : Routes.Sales
            }
            title="Продажи"
            type="sales"
            partnerId={partnerId}
          />
          <RetailingCard
            detailHref={
              partnerId
                ? `${Routes.Partners}/${partnerId}${Routes.Booking}`
                : Routes.Booking
            }
            title="Букинги"
            type="booking"
            partnerId={partnerId}
          />
        </div>
      </SectionContent>
    </Section>
  );
}
