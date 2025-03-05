import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useLeadGenerationCard } from "../lib/use-lead-generation-card";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
import { YearSelect, YearSelectSekeleton } from "@/shared/ui/year-select";
import { LeadGenerationPlanTable } from "./lead-generation-plan-table";
import { LeadGenerationPieChart } from "./lead-generation-pie-chart";

type LeadGenerationCardProps = {
  partnerId?: string;
};

export function LeadGenerationCard({ partnerId }: LeadGenerationCardProps) {
  const {
    data,
    year,
    setYear,
    isLoading,
    isUploadedYearsLoading,
    uploadedYears,
  } = useLeadGenerationCard({ partnerId });

  return (
    <Section space="lg" className="rounded-main bg-card ~px-6/14 ~py-6/9">
      <SectionHeader className="items-center gap-y-2">
        <Button
          asChild
          variant="link"
          size="hug"
          className="items-center font-normal ~gap-1.5/3"
        >
          <Link
            to={
              (partnerId
                ? `${Routes.Partners}/${partnerId}${Routes.LeadGeneration}`
                : Routes.LeadGeneration) + `?year=${year}`
            }
            className="text-h3 leading-none"
          >
            <span>Результаты лидогенерации</span>
            <Icons.ArrowRight className="~size-4/6" />
          </Link>
        </Button>
        {!isUploadedYearsLoading && uploadedYears ? (
          <YearSelect data={uploadedYears} setYear={setYear} year={year} />
        ) : (
          <YearSelectSekeleton />
        )}
      </SectionHeader>
      <SectionContent className="space-y-9">
        <div className="flex items-center justify-center">
          <LeadGenerationPieChart data={data?.months} />
        </div>
        <LeadGenerationPlanTable data={data} isLoading={isLoading} />
      </SectionContent>
    </Section>
  );
}
