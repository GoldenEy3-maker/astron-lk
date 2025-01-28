import { Routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import { Link, useSearchParams } from "react-router-dom";

export function NotFoundPage() {
  const [searchParams] = useSearchParams();

  const isNotAllowedByManager = searchParams.get("denied-role") === "manager";

  return (
    <main className="col-[main] py-[3.75rem] flex flex-col items-center justify-center">
      <svg
        className="max-w-full ~h-[9rem]/[16rem]"
        width="654"
        height="255"
        viewBox="0 0 654 255"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <path
          d="M203.386 167.763V210.263H172.153V250.526H121.957V210.263H0V196.842L75.8514 4.47369H127.534L62.4658 167.763H121.957V98.7939H172.153V167.763H203.386Z"
          fill="url(#pattern0_1803_12208)"
        />
        <path
          d="M229.468 125.636C229.468 87.8582 237.772 57.5366 254.38 34.6711C270.988 11.557 295.157 0 326.885 0C358.614 0 382.658 11.557 399.018 34.6711C415.626 57.5366 423.93 87.8582 423.93 125.636C423.93 163.662 415.502 194.73 398.647 218.838C381.791 242.946 357.87 255 326.885 255C295.652 255 271.608 242.946 254.752 218.838C237.896 194.73 229.468 163.662 229.468 125.636ZM372.247 126.009C372.247 73.0702 357.127 46.6009 326.885 46.6009C296.396 46.6009 281.151 73.0702 281.151 126.009C281.151 180.936 296.396 208.399 326.885 208.399C357.127 208.399 372.247 180.936 372.247 126.009Z"
          fill="url(#pattern1_1803_12208)"
        />
        <path
          d="M654 167.763V210.263H622.767V250.526H572.571V210.263H450.614V196.842L526.466 4.47369H578.149L513.08 167.763H572.571V98.7939H622.767V167.763H654Z"
          fill="url(#pattern2_1803_12208)"
        />
        <defs>
          <pattern
            id="pattern0_1803_12208"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#image0_1803_12208"
              transform="matrix(0.00100179 0 0 0.00175113 -0.976976 -1.0902)"
            />
          </pattern>
          <pattern
            id="pattern1_1803_12208"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#image0_1803_12208"
              transform="matrix(0.00100179 0 0 0.00175113 -0.976976 -1.0902)"
            />
          </pattern>
          <pattern
            id="pattern2_1803_12208"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#image0_1803_12208"
              transform="matrix(0.00100179 0 0 0.00175113 -0.976976 -1.0902)"
            />
          </pattern>
          <image
            id="image0_1803_12208"
            width="2048"
            height="1365"
            xlinkHref="/404.webp"
          />
        </defs>
      </svg>
      <h3 className="text-h3 text-foreground text-center ~mt-7/[3.75rem]">
        Страница находится в&nbsp;стадии строительства
      </h3>
      <Button asChild className="mt-10">
        <Link to={isNotAllowedByManager ? Routes.Partners : Routes.Home}>
          {isNotAllowedByManager
            ? "На страницу выбора партнеров"
            : "На главную"}
        </Link>
      </Button>
    </main>
  );
}
