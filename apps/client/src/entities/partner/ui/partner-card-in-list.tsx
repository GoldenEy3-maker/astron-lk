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
    <article className="grid relative grid-cols-subgrid gap-y-4 py-5 last:border-none border-b border-stroke items-center col-span-full">
      <Link
        to={Routes.Partners + "/" + id}
        className="absolute inset-0 z-10 ring-offset-background rounded-main focus:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition"
      />
      <div className="flex items-center gap-x-8">
        <img className="w-[4.75rem] h-[3.375rem]" src={logo} alt={title} />
      </div>
      <h3 className="text-h3">{title}</h3>
      <div className="flex gap-x-5 gap-y-2 md:col-span-1 col-span-full m-md:col-span-full m-xl:flex-nowrap min-[54.75rem]:flex-nowrap flex-wrap m-md:flex-wrap m-xl:col-span-1">
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
