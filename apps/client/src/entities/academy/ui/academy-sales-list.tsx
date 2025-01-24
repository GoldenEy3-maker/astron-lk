import { useQuery } from "@tanstack/react-query";
import { getAcademySalesQueryOptions } from "../api/academy-query";
import { useRef, useState } from "react";
import { useMediaQuery, useResizeObserver } from "usehooks-ts";
import { AcademySalesCard } from "./academy-sales-card";
import { AcademySalesCardSkeleton } from "./academy-sales-card-skeleton";

export function AcademySalesList() {
  const mdBreakpoint = useMediaQuery("(min-width: 56.25rem)");
  const xsBreakpoint = useMediaQuery("(min-width: 30rem)");

  const { data, isLoading } = useQuery(getAcademySalesQueryOptions());

  const containerRef = useRef<HTMLDivElement>(null);

  const [containerDimensions, setContainerDimensions] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useResizeObserver({
    ref: containerRef,
    onResize: setContainerDimensions,
  });

  return (
    <div
      className="grid grid-cols-1 xs:grid-cols-2 min-[56.25rem]:grid-cols-3 gap-[2.125rem]"
      ref={containerRef}
      style={
        {
          "--container-width": containerDimensions.width + "px",
        } as React.CSSProperties
      }>
      {!isLoading && data
        ? data.map((item, index) => (
            <AcademySalesCard
              key={item.slug}
              isNextArrowLine={
                index !== data.length - 1 &&
                index !== data.length - 2 &&
                (mdBreakpoint
                  ? index % 3 !== 2
                  : xsBreakpoint
                  ? index % 2 !== 1
                  : true)
              }
              isWrapArrowLine={
                mdBreakpoint
                  ? index % 3 === 2 && index !== data.length - 1
                  : index % 2 === 1 && index !== data.length - 1
              }
              {...item}
            />
          ))
        : Array(9)
            .fill(null)
            .map((_, index) => <AcademySalesCardSkeleton key={index} />)}
    </div>
  );
}
