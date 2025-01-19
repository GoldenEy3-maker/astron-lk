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
import { CrumbLabel, useBreadcrumbsStore } from "../model/breadcrumbs-store";

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
  const { paramLabels } = useBreadcrumbsStore();

  const crumbs = matches
    .filter((match) => Boolean((match.handle as CrumbHandle)?.crumb))
    .map((match) => {
      const crumb = (match.handle as CrumbHandle)?.crumb;

      const paramLabel = paramLabels
        .filter((paramLabel) => {
          if (typeof crumb === "function") {
            const { param } = crumb({ href: match.pathname, label: undefined });
            return param === paramLabel.param;
          }
          return true;
        })
        .find((paramLabel) =>
          Object.keys(match.params).includes(paramLabel.param)
        );

      return typeof crumb === "function"
        ? crumb({ href: match.pathname, label: paramLabel?.label })
        : crumb;
    });

  if (crumbs.length === 0 || crumbs.length === 1) return null;

  return (
    <UiBreadcrumbs className={className}>
      <BreadcrumbList>
        {crumbs.slice(0, -1).map((crumb) => (
          <Fragment key={crumb.href}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={crumb.href}>{crumb.label ?? "Загрузка..."}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>
            {crumbs[crumbs.length - 1]?.label ?? "Загрузка..."}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </UiBreadcrumbs>
  );
}
