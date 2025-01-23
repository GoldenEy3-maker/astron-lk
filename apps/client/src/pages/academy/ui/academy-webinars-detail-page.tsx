import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAcademyWebinarByIdQueryOptions } from "../api/academy-query";
import {
  InfoBlockParser,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";

export function AcademyWebinarsDetailPage() {
  const { webinarId } = useParams<{ webinarId: string }>();
  const { data, isLoading } = useQuery(
    getAcademyWebinarByIdQueryOptions(webinarId!)
  );

  useBreadcrumbs("webinarId", data?.title);

  return (
    <Section className="col-span-full m-md:col-[span_15]">
      <SectionHeader className="items-start flex-col gap-5">
        <h1 className="text-h1 text-heading-h2">{data?.title}</h1>
        <p className="~text-base/lg">{data?.description}</p>
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
