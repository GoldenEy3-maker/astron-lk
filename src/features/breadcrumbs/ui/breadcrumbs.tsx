import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as UiBreadcrumbs,
} from "@/shared/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useBreadcrumbsStore } from "../lib/breadcrumbs-store";
import { TextMorph } from "@/shared/ui/text-morph";
import React from "react";

export function Breadcrumbs() {
  const { currentPage, paths } = useBreadcrumbsStore();

  if (paths.length === 0) return null;

  return (
    <UiBreadcrumbs className="col-[main] mt-6">
      <BreadcrumbList>
        {paths.map((path) => (
          <React.Fragment key={path.href}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={path.href}>
                  <TextMorph as="span">{path.label ?? "Загрузка..."}</TextMorph>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>
            <TextMorph as="span">{currentPage ?? "Загрузка..."}</TextMorph>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </UiBreadcrumbs>
  );
}
