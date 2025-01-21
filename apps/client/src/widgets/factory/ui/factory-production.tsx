import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { VideoDialog } from "@/shared/ui/video-dialog";

type FactoryProductionProps = {} & React.ComponentProps<typeof Section>;

export function FactoryProduction(props: FactoryProductionProps) {
  return (
    <Section space="md" {...props}>
      <SectionHeader>
        <h2 className="text-h2 text-heading-h2">Производство Astron</h2>
      </SectionHeader>
      <SectionContent>
        <VideoDialog
          thumbnailSrc="/video-poster-2.webp"
          thumbnailAlt="Видео о завода Астрон"
          videoSrc="https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true"
          triggerClassName="max-h-[30rem]"
        />
      </SectionContent>
    </Section>
  );
}
