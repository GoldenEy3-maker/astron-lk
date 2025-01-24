import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAcademyBenefitByIdQueryOptions } from "../api/academy-query";
import {
  InfoBlockParser,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import parse from "html-react-parser";
import { Image } from "@/shared/ui/image";
import { AcademyBenefitsTagsBadge } from "@/entities/academy";

export function AcademyBenefitsDetailPage() {
  const { benefitId } = useParams<{ benefitId: string }>();
  const { data, isLoading } = useQuery(
    getAcademyBenefitByIdQueryOptions(benefitId!)
  );

  useBreadcrumbs("benefitId", data?.title);

  return (
    <Section className="col-span-full m-md:col-[span_15]">
      <SectionHeader className="items-start flex-col gap-3">
        <h1 className="text-h1 text-heading-h2">{parse(data?.title ?? "")}</h1>
        {/* <p className="~text-base/lg">{parse(data?.description ?? "")}</p> */}
        {data?.tags && data?.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {data?.tags.map((tag) => (
              <AcademyBenefitsTagsBadge label={tag.label} key={tag.id} />
            ))}
          </div>
        ) : null}
        {data?.img ? (
          <Image
            src={data?.img?.src}
            className="w-full mt-5"
            alt={data?.img?.alt}
          />
        ) : null}
      </SectionHeader>
      <SectionContent>
        {!isLoading && data ? (
          <InfoBlockParser content={data.content} />
        ) : (
          <InfoBlockSkeleton />
        )}
      </SectionContent>
    </Section>
  );
}
