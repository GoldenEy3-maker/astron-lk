import { useQuery } from "@tanstack/react-query";
import { getNewsByIdQueryOptions } from "../api/news-query";
import { useParams } from "react-router-dom";
import { formatDate } from "@/shared/lib/format-date";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import { HTMLParser } from "@/shared/ui/html-parser";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";

export function NewsDetailPage() {
  const params = useParams<{ newsId: string }>();
  const { data, isLoading } = useQuery(getNewsByIdQueryOptions(params.newsId!));

  useBreadcrumbs("newsId", data?.title);

  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <Section space="md" className="col-span-full m-md:col-[span_15]">
      <SectionHeader className="flex-col items-start gap-3">
        <h1 className="text-h1 text-heading-h2">{data.title}</h1>
        <time dateTime={data.createdAt} className="block text-muted text-sm">
          {formatDate(new Date(data.createdAt))}
        </time>
      </SectionHeader>
      <SectionContent>
        <HTMLParser html={data.content} />
      </SectionContent>
    </Section>
  );
}
