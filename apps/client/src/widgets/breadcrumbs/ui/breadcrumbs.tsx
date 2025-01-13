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
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/shared/lib/cn";

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

  return (
    <AnimatePresence>
      {crumbs.length > 1 ? (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: "1.5rem" }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          className={cn(className)}>
          <UiBreadcrumbs>
            <BreadcrumbList>
              {crumbs.slice(0, -1).map((crumb) => (
                <Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={crumb.href}>
                        {crumb.label ?? "Загрузка..."}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
              ))}
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {crumbs[crumbs.length - 1].label ?? "Загрузка..."}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </UiBreadcrumbs>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
