import { schemas } from "@/shared/api/v1";
import { Routes } from "@/shared/constants/routes";
import { Link } from "react-router-dom";
import { z } from "zod";
import { CircularProgress } from "./partners-circular-progress";

type PartnerCardInListProps = {} & z.infer<typeof schemas.PartnerInList>;

export function PartnerCardInList({
  id,
  title,
  logo,
  sales,
  booking,
}: PartnerCardInListProps) {
  return (
    <article className="relative col-span-full grid grid-cols-subgrid items-center gap-y-4 border-b border-stroke py-5 last:border-none">
      <Link
        to={Routes.Partners + "/" + id}
        className="absolute inset-0 z-10 rounded-main ring-offset-background transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      <div className="flex items-center gap-x-8">
        {logo ? (
          <img className="h-[3.375rem] w-[4.75rem]" src={logo} alt={title} />
        ) : null}
      </div>
      <h3 className="text-h3">{title}</h3>
      <div className="col-span-full flex flex-wrap gap-x-5 gap-y-2 md:col-span-1 min-[54.75rem]:flex-nowrap m-md:col-span-full m-md:flex-wrap m-xl:col-span-1 m-xl:flex-nowrap">
        <div className="flex gap-3">
          <CircularProgress value={sales.percent} />
          <div>
            <p className="font-medium">Продажи</p>
            <div className="flex items-center gap-x-3">
              <span>
                {new Intl.NumberFormat("ru", {
                  style: "currency",
                  currency: "RUB",
                  maximumFractionDigits: 0,
                }).format(sales.total)}
              </span>
              <span>{sales.percent}%</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <CircularProgress value={booking.percent} />
          <div>
            <p className="font-medium">Букинги</p>
            <div className="flex items-center gap-x-3">
              <span>
                {new Intl.NumberFormat("ru", {
                  style: "currency",
                  currency: "RUB",
                  maximumFractionDigits: 0,
                }).format(booking.total)}
              </span>
              <span>{booking.percent}%</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
