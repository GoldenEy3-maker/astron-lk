import { Documents } from "@/entities/document";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useRef } from "react";

export function FavoritesPage() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <Section space="lg" className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2" ref={scrollToRef}>
          Избранное
        </h1>
      </SectionHeader>
      <SectionContent>
        <Documents
          queryKey="favorites"
          scrollToRef={scrollToRef}
          className="~mt-1/3"
        />
      </SectionContent>
    </Section>
  );
}
