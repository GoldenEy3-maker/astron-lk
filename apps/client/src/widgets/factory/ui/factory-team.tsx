import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useQuery } from "@tanstack/react-query";
import { getFactoryTeamQueryOptions } from "../api/factory-query";
import { FactoryTeamCard } from "./factory-team-card";
import { FactoryTeamCardSkeleton } from "./factory-team-card-skeleton";

type FactoryTeamProps = {} & React.ComponentProps<typeof Section>;

export function FactoryTeam(props: FactoryTeamProps) {
  const { data, isLoading } = useQuery(getFactoryTeamQueryOptions());

  return (
    <Section {...props}>
      <SectionHeader>
        <h2 className="text-h2 text-heading-h2">Команда Astron</h2>
      </SectionHeader>
      <SectionContent>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
          {!isLoading && data
            ? data.map((employee) => <FactoryTeamCard {...employee} />)
            : Array(3)
                .fill(null)
                .map((_, index) => <FactoryTeamCardSkeleton key={index} />)}
        </div>
      </SectionContent>
    </Section>
  );
}
