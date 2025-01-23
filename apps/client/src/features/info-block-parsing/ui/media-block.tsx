import { schemas } from "@/shared/api/v1";
import { cn } from "@/shared/lib/cn";
import { Image } from "@/shared/ui/image";
import { VideoDialog } from "@/shared/ui/video-dialog";
import { z } from "zod";

type MediaBlockProps = {
  media: z.infer<typeof schemas.MediaBlock>;
  className?: string;
};

export function MediaBlock({ media, className }: MediaBlockProps) {
  if (media.type === "image") {
    return <Image src={media.src} alt={media.alt} className={className} />;
  }

  return (
    <VideoDialog
      videoSrc={media.src}
      thumbnailSrc={media.thumbnail}
      thumbnailAlt={media.alt}
      triggerClassName={cn("block", className)}
    />
  );
}
