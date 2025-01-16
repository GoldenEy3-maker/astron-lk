import { Search } from "@/features/search";
import { useRef } from "react";

export function SearchPage() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <div className="col-span-full grid grid-cols-subgrid auto-rows-max">
      <h1 className="text-h1 text-heading-h2 col-span-full" ref={scrollToRef}>
        Поиск по&nbsp;сайту
      </h1>
      <Search
        className="m-md:col-[span_13] col-span-full ~mt-4/7"
        limit={7}
        scrollToRef={scrollToRef}
      />
    </div>
  );
}
