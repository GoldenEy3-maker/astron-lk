import { useQuery } from "@tanstack/react-query";
import { getNewsByIdQueryOptions } from "../api/news-query";
import { useParams } from "react-router-dom";
import { formatDate } from "@/shared/lib/format-date";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { InfoBlockSkeleton } from "@/features/info-block-parsing";
import parse from "html-react-parser";
import { TextContainer } from "@/shared/ui/text-container";

export function NewsDetailPage() {
  const params = useParams<{ newsId: string }>();
  const { data, isLoading } = useQuery(getNewsByIdQueryOptions(params.newsId!));

  useBreadcrumbs("newsId", data?.title);

  return (
    <Section space="md" className="col-span-full m-md:col-[span_15]">
      {!isLoading && data ? (
        <SectionHeader className="flex-col items-start gap-3">
          <h1 className="text-h1 text-heading-h2">{parse(data.title)}</h1>
          <time dateTime={data.createdAt} className="block text-sm text-muted">
            {formatDate(new Date(data.createdAt))}
          </time>
        </SectionHeader>
      ) : null}
      <SectionContent>
        {!isLoading && data ? (
          <TextContainer html={data.content.text} />
        ) : (
          <InfoBlockSkeleton />
        )}
      </SectionContent>
    </Section>
  );
}
