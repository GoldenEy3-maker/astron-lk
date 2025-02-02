import { schemas } from "@/shared/api/client";
import { Routes } from "@/shared/constants/routes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import { Link } from "react-router-dom";
import { z } from "zod";

type SearchCardProps = {} & z.infer<typeof schemas.SearchResult>;

const TranslateSearchResultTypeMap: Record<
  z.infer<typeof schemas.SearchResult>["type"],
  string
> = {
  news: "Новости",
  document: "Документы",
  bulletin: "Бюллетени",
};

export function SearchCard({
  id,
  title,
  description,
  type,
  fileUrl,
}: SearchCardProps) {
  return (
    <article className="group/item relative z-10 flex flex-col border-b border-border/40 ~gap-2.5/3.5 ~py-4/7 last:border-b-0">
      {type === "news" ? (
        <Link to={`${Routes.News}/${id}`} className="absolute inset-0" />
      ) : type === "document" || type === "bulletin" ? (
        <a className="absolute inset-0" href={fileUrl} download />
      ) : null}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              {TranslateSearchResultTypeMap[type]}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-h2 text-primary transition group-hover/item:text-primary-accent">
        {title}
      </h2>
      {description ? <p className="leading-tight">{description}</p> : null}
    </article>
  );
}
