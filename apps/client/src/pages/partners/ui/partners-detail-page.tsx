import {
  getPartnerByIdQueryOptions,
  PartnerCard,
  PartnersSelect,
} from "@/entities/partner";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import { Kpi } from "@/widgets/kpi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPartnersSelectQueryOptions } from "../api/partners-query";

export function PartnersDetailPage() {
  const { partnerId } = useParams<{ partnerId: string }>();

  const { data: partner } = useQuery(getPartnerByIdQueryOptions(partnerId!));
  const { data: partners } = useQuery(getPartnersSelectQueryOptions());

  useBreadcrumbs("partnerId", partner?.title);

  return (
    <Section space="lg" className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Партнёр-строитель</h1>
        {partners && <PartnersSelect selectedId={partnerId} data={partners} />}
      </SectionHeader>
      <SectionContent className="!main-space">
        <PartnerCard id={partnerId} />
        <Kpi partnerId={partnerId} />
      </SectionContent>
    </Section>
  );
}
