import { DocumentCard, DocumentCardSkeleton } from "@/entities/document";
import { cn } from "@/shared/lib/cn";
import { VideoDialog } from "@/shared/ui/video-dialog";
import { useQuery } from "@tanstack/react-query";
import { getFactoryInfoQueryOptions } from "../api/factory-query";
import { Skeleton } from "@/shared/ui/skeleton";
import { HTMLParser } from "@/shared/ui/html-parser";

type FactoryAboutProps = {
  extended?: boolean;
} & React.ComponentProps<"div">;

export function FactoryAbout({
  className,
  extended,
  ...props
}: FactoryAboutProps) {
  const { data, isLoading } = useQuery(getFactoryInfoQueryOptions());

  return (
    <div className={cn("current-section-layout", className)} {...props}>
      <div
        className={cn("current-section-layout__first ~space-y-4/9", {
          "_col-one-more": extended,
        })}>
        {!isLoading && data ? (
          <HTMLParser html={data.text} className="~space-y-2/3 leading-[1.3]" />
        ) : (
          <div className="space-y-2">
            <Skeleton className="w-full h-3 !rounded-full" />
            <Skeleton className="w-full h-3 !rounded-full" />
            <Skeleton className="w-full h-3 !rounded-full" />
            <Skeleton className="w-full h-3 !rounded-full" />
            <Skeleton className="w-full h-3 !rounded-full" />
            <Skeleton className="w-full h-3 !rounded-full" />
          </div>
        )}
        {extended ? (
          !isLoading && data ? (
            <DocumentCard className="w-full sm:w-5/6" {...data.document} />
          ) : (
            <DocumentCardSkeleton className="w-full sm:w-5/6" />
          )
        ) : null}
      </div>
      <div className="current-section-layout__second">
        {extended ? (
          !isLoading && data ? (
            <img
              src={data.img.src}
              className="rounded-main size-full object-cover"
              alt={data.img.alt}
            />
          ) : (
            <Skeleton className="size-full !rounded-main" />
          )
        ) : !isLoading && data ? (
          <VideoDialog
            thumbnailSrc={data.video.thumbnail}
            thumbnailAlt={data.video.alt}
            videoSrc={data.video.src}
            triggerClassName={"~h-[18rem]/[22.5rem]"}
          />
        ) : (
          <Skeleton className="w-full ~h-[18rem]/[22.5rem] !rounded-main" />
        )}
      </div>
    </div>
  );
}
