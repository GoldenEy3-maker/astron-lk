import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "../lib/cn";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { Icons } from "./icons";

type VideoDialogProps = {
  thumbnailSrc: string;
  thumbnailAlt?: string;
  videoSrc: string;
  triggerClassName?: string;
};

export function VideoDialog({
  thumbnailSrc,
  videoSrc,
  thumbnailAlt,
  triggerClassName,
}: VideoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
        variant="ghost"
        className={cn(
          "group relative aspect-video w-full overflow-hidden !rounded-main p-0",
          triggerClassName,
        )}
      >
        <img
          src={thumbnailSrc}
          className="size-full object-cover"
          alt={thumbnailAlt}
        />
        <div className="inset-center absolute flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-white text-primary transition group-hover:scale-110">
          <Icons.Play className="inset-center absolute ml-0.5" />
        </div>
      </DialogTrigger>
      <DialogContent
        className="h-full max-w-7xl gap-3 rounded-none bg-transparent sm:max-h-[772px]"
        scrollAreaClassName="[&>div>div]:h-full h-full"
        wrapperClassName={
          "p-0 h-full rounded-none sm:rounded-main bg-[rgba(24,24,27,.9)] overflow-hidden"
        }
        overlayClassName={"bg-black/85"}
        isOutsideClose
      >
        <VisuallyHidden>
          <DialogTitle>{thumbnailAlt}</DialogTitle>
          <DialogDescription>Диалоговое окно с видео</DialogDescription>
        </VisuallyHidden>
        <iframe
          src={videoSrc}
          className="size-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
