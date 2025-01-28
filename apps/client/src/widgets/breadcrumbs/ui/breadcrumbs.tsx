import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as UiBreadcrumbs,
} from "@/shared/ui/breadcrumb";
import { Link, useMatches } from "react-router-dom";
import { Fragment } from "react";
import {
  CrumbLabel,
  useBreadcrumbsContext,
} from "../model/breadcrumbs-context";

export type CrumbHandle =
  | {
      crumb: (crumbFromParams: { href: string; label: CrumbLabel }) => {
        param: string;
        href: string;
        label: CrumbLabel;
      };
    }
  | {
      crumb: {
        href: string;
        label: CrumbLabel;
      };
    };

type BreadcrumbsProps = {
  className?: string;
};

export function Breadcrumbs({ className }: BreadcrumbsProps) {
  const matches = useMatches();
  const { getDynamicParam } = useBreadcrumbsContext();

  const crumbs = matches
    .filter((match) => Boolean((match.handle as CrumbHandle)?.crumb))
    .map((match) => {
      const crumb = (match.handle as CrumbHandle)?.crumb;

      if (typeof crumb === "function") {
        const { param, href } = crumb({
          href: match.pathname,
          label: undefined,
        });
        const dynamicParam = getDynamicParam(param);
        return {
          href,
          label: dynamicParam?.label ?? "Загрузка...",
        };
      }

      return crumb;
    });

  if (crumbs.length === 0 || crumbs.length === 1) return null;

  return (
    <UiBreadcrumbs className={className}>
      <BreadcrumbList>
        {crumbs.slice(0, -1).map((crumb) => (
          <Fragment key={crumb.href}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={crumb.href}>
                  {crumb.label?.replace("&nbsp;", " ")}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>
            {crumbs[crumbs.length - 1]?.label?.replace("&nbsp;", " ")}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </UiBreadcrumbs>
  );
}
