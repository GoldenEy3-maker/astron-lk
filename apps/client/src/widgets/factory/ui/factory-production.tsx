import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { VideoDialog } from "@/shared/ui/video-dialog";
import { getFactoryInfoQueryOptions } from "../api/factory-query";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/shared/ui/skeleton";

type FactoryProductionProps = {} & React.ComponentProps<typeof Section>;

export function FactoryProduction(props: FactoryProductionProps) {
  const { data, isLoading } = useQuery(getFactoryInfoQueryOptions());

  if (!isLoading && data && !data.video) return null;

  return (
    <Section space="md" {...props}>
      <SectionHeader>
        <h2 className="text-h2 text-heading-h2">Производство Astron</h2>
      </SectionHeader>
      <SectionContent>
        {!isLoading && data ? (
          data.video ? (
            <VideoDialog
              thumbnailSrc={data.video.thumbnail}
              thumbnailAlt={data.video.alt}
              videoSrc={data.video.src}
              triggerClassName="max-h-[30rem]"
            />
          ) : null
        ) : (
          <Skeleton className="aspect-video size-full max-h-[30rem] !rounded-main" />
        )}
      </SectionContent>
    </Section>
  );
}
