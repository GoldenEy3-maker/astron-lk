import { Routes } from "@/shared/constants/routes";
import { cn } from "@/shared/lib/cn";
import { Icons } from "@/shared/ui/icons";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useRef, useState } from "react";
import {
  useResizeObserver,
  useDebounceCallback,
  useMediaQuery,
} from "usehooks-ts";
import { Link } from "react-router-dom";

const academySalesData = [
  {
    title: "New",
    description: "Новый запрос на здание",
    slug: "new",
  },
  {
    title: "Qualification",
    description: "Новый запрос на здание",
    slug: "qualification",
  },
  {
    title: "Assigned to Sales",
    description: "Новый запрос на здание",
    slug: "assigned_to_sales",
  },
  {
    title: "Stage 1",
    description: "Новый запрос на здание",
    slug: "stage_1",
  },
  {
    title: "Stage 2",
    description: "Новый запрос на здание",
    slug: "stage_2",
  },
  {
    title: "Stage 3",
    description: "Новый запрос на здание",
    slug: "stage_3",
  },
  {
    title: "Contact and Terms",
    description: "Новый запрос на здание",
    slug: "contact_and_terms",
  },
  {
    title: "Won",
    description: "Новый запрос на здание",
    slug: "won",
  },
  {
    title: "Lost",
    description: "Новый запрос на здание",
    slug: "lost",
  },
];

export function AcademySalesPage() {
  const mdBreakpoint = useMediaQuery("(min-width: 903px)");
  const xsBreakpoint = useMediaQuery("(min-width: 30rem)");
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const onResize = useDebounceCallback(setContainerDimensions, 200);

  useResizeObserver({
    ref: containerRef,
    onResize,
  });
  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Процесс продаж</h1>
      </SectionHeader>
      <SectionContent>
        <div
          className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-[2.125rem]"
          ref={containerRef}
          style={
            {
              "--container-width": containerDimensions.width + "px",
            } as React.CSSProperties
          }>
          {academySalesData.map((item, index) => (
            <article
              key={item.slug}
              className={cn(
                "~py-3/4 ~px-4/7 group rounded-main ~min-h-[8rem]/[9.25rem] hover:bg-primary transition duration-300 hover:text-primary-foreground bg-primary/10 text-primary relative",
                {
                  "after:absolute xs:after:rotate-0 after:rotate-90 after:top-[calc(100%)] max-xs:after:-translate-x-1/2 after:right-1/2 xs:after:top-1/2 xs:after:-right-[2.125rem] after:w-[2.125rem] after:bg-[url('/icons/dashed-arrow-line.svg')] after:bg-no-repeat after:bg-center after:h-1.5 after:pointer-events-none":
                    index !== academySalesData.length - 1 &&
                    (xsBreakpoint
                      ? index !== academySalesData.length - 2
                      : true) &&
                    (mdBreakpoint
                      ? index % 3 !== 2
                      : xsBreakpoint
                      ? index % 2 !== 1
                      : true),
                  "xs:before:absolute before:-bottom-8 before:right-0 before:w-[var(--container-width)] before:h-8 before:bg-[url('/icons/dashed-wrap-arrow-line.svg')] before:bg-no-repeat before:bg-center before:pointer-events-none":
                    mdBreakpoint
                      ? index % 3 === 2 && index !== academySalesData.length - 1
                      : index % 2 === 1 &&
                        index !== academySalesData.length - 1,
                }
              )}>
              <Link
                to={Routes.AcademySales + "/?slug=" + item.slug}
                className="absolute inset-0 z-20 ring-offset-background rounded-main focus:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition"
              />
              <h3 className="text-h3">
                {item.title}&nbsp;
                <Icons.ArrowRight className="inline w-3 h-2 opacity-0 group-hover:opacity-100 duration-300 transition-[opacity]" />
              </h3>
              <p className="~text-base/lg ~mt-2/3 !leading-[1.3] opacity-0 group-hover:opacity-100 duration-300 transition-[opacity]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
