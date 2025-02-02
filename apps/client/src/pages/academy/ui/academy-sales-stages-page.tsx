import {
  InfoBlockParser,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Skeleton } from "@/shared/ui/skeleton";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/shared/ui/tabs";
import { getAcademySalesQueryOptions } from "@/entities/academy";
import { useQuery } from "@tanstack/react-query";
import { parseAsString, useQueryState } from "nuqs";

export function AcademySalesStagesPage() {
  const { data, isLoading } = useQuery(getAcademySalesQueryOptions());

  const [tab, setTab] = useQueryState(
    "tab",
    parseAsString.withDefault(data?.[0]?.slug ?? ""),
  );

  return (
    <Section
      space="md"
      className="col-span-full grid auto-rows-max grid-cols-subgrid"
    >
      <SectionHeader className="col-span-full">
        {!isLoading && data ? (
          <h1 className="text-h1 text-heading-h2">
            {data?.find((item) => item.slug === tab)?.title}
          </h1>
        ) : (
          <Skeleton className="h-8 w-1/4 !rounded-full" />
        )}
      </SectionHeader>
      <SectionContent className="col-span-full grid grid-cols-subgrid">
        <Tabs
          value={tab}
          onValueChange={setTab}
          className="col-span-full grid grid-cols-subgrid"
        >
          <TabsList scrollAreaClassName="col-span-full">
            {!isLoading && data
              ? data?.map((item) => (
                  <TabsTrigger key={item.slug} value={item.slug}>
                    {item.title}
                  </TabsTrigger>
                ))
              : Array(9)
                  .fill(null)
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      className="h-10 w-full !rounded-full"
                    />
                  ))}
          </TabsList>
          <div className="col-span-full mt-8 m-md:col-[span_15]">
            {!isLoading && data ? (
              data?.map((item) => (
                <TabsContent key={item.slug} value={item.slug} className="mt-0">
                  <InfoBlockParser content={item.content} />
                </TabsContent>
              ))
            ) : (
              <InfoBlockSkeleton />
            )}
          </div>
        </Tabs>
      </SectionContent>
    </Section>
  );
}
