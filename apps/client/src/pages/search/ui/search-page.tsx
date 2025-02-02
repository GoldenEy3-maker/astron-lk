import { Search } from "@/features/search";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useRef } from "react";

export function SearchPage() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <Section
      space="sm"
      className="col-span-full grid auto-rows-max grid-cols-subgrid"
    >
      <SectionHeader className="col-span-full">
        <h1 className="text-h1 text-heading-h2" ref={scrollToRef}>
          Поиск по&nbsp;сайту
        </h1>
      </SectionHeader>
      <SectionContent className="col-span-full m-md:col-[span_13]">
        <Search
          limit={7}
          scrollToRef={scrollToRef as React.RefObject<HTMLDivElement>}
        />
      </SectionContent>
    </Section>
  );
}
