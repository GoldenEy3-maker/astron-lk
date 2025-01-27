import { getPartnerByIdQueryOptions, PartnerCard } from "@/entities/partner";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import { Kpi } from "@/widgets/kpi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function PartnersDetailPage() {
  const { partnerId } = useParams<{ partnerId: string }>();

  const { data: partner } = useQuery(getPartnerByIdQueryOptions(partnerId!));

  useBreadcrumbs("partnerId", partner?.title);

  return (
    <Section space="lg" className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Партнёр-строитель</h1>
      </SectionHeader>
      <SectionContent className="!main-space">
        <PartnerCard id={partnerId} />
        <Kpi partnerId={partnerId} />
      </SectionContent>
    </Section>
  );
}
