import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useRetailingCard } from "../lib/use-retailing-card";
import { RetailingQueryType } from "../model/types";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";
import { Icons } from "@/shared/ui/icons";
import { YearSelect, YearSelectSekeleton } from "@/shared/ui/year-select";
import { RetailingQuartersChart } from "./retailing-quarters-chart";

type RetailingCardProps = {
  title: string;
  type: RetailingQueryType;
  detailHref: string;
  partnerId?: string;
};

export function RetailingCard({
  title,
  type,
  partnerId,
  detailHref,
}: RetailingCardProps) {
  const {
    isUploadedYearsLoading,
    setYear,
    uploadedYears,
    year,
    progress,
    yearFact,
    yearPlan,
    isLoading,
  } = useRetailingCard({ type, partnerId });

  return (
    <Section space="sm" className="rounded-main bg-card ~px-6/14 ~py-6/9">
      <SectionHeader className="items-center gap-y-2">
        <Button
          asChild
          variant="link"
          size="hug"
          className="items-center font-normal ~gap-1.5/3"
        >
          <Link
            to={detailHref + `?year=${year}`}
            className="text-h3 leading-none"
          >
            <span>{title}</span>
            <Icons.ArrowRight className="~size-4/6" />
          </Link>
        </Button>
        {!isUploadedYearsLoading && uploadedYears ? (
          <YearSelect data={uploadedYears} setYear={setYear} year={year} />
        ) : (
          <YearSelectSekeleton />
        )}
      </SectionHeader>
      <SectionContent>
        <RetailingQuartersChart
          progress={progress}
          fact={yearFact}
          isLoading={isLoading}
          plan={yearPlan}
        />
      </SectionContent>
    </Section>
  );
}
