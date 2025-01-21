import { cn } from "../lib/cn";
import { Dialog, DialogTrigger, DialogContent } from "./dialog";
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
          "p-0 h-auto w-full relative group !rounded-main overflow-hidden",
          triggerClassName
        )}>
        <img
          src={thumbnailSrc}
          className="size-full object-cover"
          alt={thumbnailAlt}
        />
        <div className="bg-white w-[3.75rem] group-hover:scale-110 transition absolute inset-center text-primary h-[3.75rem] rounded-full flex items-center justify-center">
          <Icons.Play className="absolute ml-0.5 inset-center" />
        </div>
      </DialogTrigger>
      <DialogContent
        className="max-w-7xl sm:max-h-[772px] rounded-none gap-3 h-full bg-transparent"
        scrollAreaClassName="[&>div>div]:h-full h-full"
        wrapperClassName={
          "p-0 h-full rounded-none sm:rounded-main bg-[rgba(24,24,27,.9)] overflow-hidden"
        }
        overlayClassName={"bg-black/85"}
        isOutsideClose>
        <iframe
          src={videoSrc}
          className="size-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </DialogContent>
    </Dialog>
  );
}
