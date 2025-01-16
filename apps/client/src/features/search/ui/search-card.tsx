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
    <article className="relative z-10 flex flex-col ~gap-2.5/3.5 group/item ~py-4/7 border-b border-border/40 last:border-b-0">
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
      <h2 className="text-h2 text-primary group-hover/item:text-primary-accent transition">
        {title}
      </h2>
      {description ? <p className="leading-tight">{description}</p> : null}
    </article>
  );
}
