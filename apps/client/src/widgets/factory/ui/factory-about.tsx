import { DocumentCard, DocumentCardSkeleton } from "@/entities/document";
import { cn } from "@/shared/lib/cn";
import { VideoDialog } from "@/shared/ui/video-dialog";
import { useQuery } from "@tanstack/react-query";
import { getFactoryDocumentQueryOptions } from "../api/factory-query";

type FactoryAboutProps = {
  extended?: boolean;
} & React.ComponentProps<"div">;

export function FactoryAbout({
  className,
  extended,
  ...props
}: FactoryAboutProps) {
  const { data: document, isLoading: isLoadingDocument } = useQuery({
    ...getFactoryDocumentQueryOptions(),
    enabled: !!extended,
  });

  return (
    <div className={cn("current-section-layout", className)} {...props}>
      <div
        className={cn("current-section-layout__first ~space-y-4/9", {
          "_col-one-more": extended,
        })}>
        <div className="current-section-layout__text">
          <p>
            Наш завод&nbsp;&mdash; наша гордость. Общая площадь комплекса
            составляет 25&nbsp;000&nbsp;м&sup2;, а&nbsp;производственные
            мощности включают 3-этажный АБК, цехи и&nbsp;крытый склад площадью
            2600&nbsp;м&sup2;.
          </p>
          <p>
            Цепочка поставок Astron локализована и&nbsp;не&nbsp;подвержена
            санкционным ограничениям. Пул поставщиков сформирован
            из&nbsp;проверенных российских производителей, что гарантирует
            стабильность поставок сырья, прогнозируемость ценообразования
            и&nbsp;соблюдение обязательств Astron перед заказчиками.
          </p>
        </div>
        {extended ? (
          !isLoadingDocument && document ? (
            <DocumentCard className="w-full sm:w-5/6" {...document} />
          ) : (
            <DocumentCardSkeleton className="w-full sm:w-5/6" />
          )
        ) : null}
      </div>
      <div className="current-section-layout__second">
        {extended ? (
          <img
            src="/video-poster-2.webp"
            className="rounded-main w-full h-full object-cover"
            alt="Картинка завода Астрон"
          />
        ) : (
          <VideoDialog
            thumbnailSrc="/video-poster-2.webp"
            thumbnailAlt="Видео о заводе Астрон"
            videoSrc="https://kinescope.io/embed/rtJX1JznNqxA1tnXuFhyj4?autoplay=true"
            triggerClassName={"~h-[18rem]/[22.5rem]"}
          />
        )}
      </div>
    </div>
  );
}
