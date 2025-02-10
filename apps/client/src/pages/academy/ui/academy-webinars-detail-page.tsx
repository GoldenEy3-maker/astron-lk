import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAcademyWebinarByIdQueryOptions } from "../api/academy-query";
import {
  InfoBlockParser,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import parse from "html-react-parser";

export function AcademyWebinarsDetailPage() {
  const { webinarId } = useParams<{ webinarId: string }>();
  const { data, isLoading } = useQuery(
    getAcademyWebinarByIdQueryOptions(webinarId!),
  );

  useBreadcrumbs("webinarId", data?.title);

  return (
    <Section className="col-span-full m-md:col-[span_15]">
      {!isLoading && data ? (
        <SectionHeader className="flex-col items-start gap-5">
          <h1 className="text-h1 text-heading-h2">{parse(data.title)}</h1>
          {data.description ? (
            <p className="~text-base/lg">{parse(data.description)}</p>
          ) : null}
        </SectionHeader>
      ) : null}
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
