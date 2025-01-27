import { useQuery } from "@tanstack/react-query";
import { getPartnersQueryOptions } from "../api/partner-query";
import { CircularProgress } from "./partners-circular-progress";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants/routes";
import { PartnersSortKeyMap } from "../constants/partners-sort-maps";

type PartnersListProps = {
  sort?: PartnersSortKeyMap;
};

export function PartnersList({ sort }: PartnersListProps) {
  const { data, isLoading } = useQuery(getPartnersQueryOptions(sort));

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] gap-x-8">
      {!isLoading && data ? (
        data.map((partner) => (
          <article
            key={partner.id}
            className="grid relative grid-cols-subgrid py-5 last:border-none border-b border-stroke items-center col-span-full">
            <Link
              to={Routes.Partners + "/" + partner.id}
              className="absolute inset-0 z-10 ring-offset-background rounded-main focus:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition"
            />
            <div className="flex items-center gap-x-8">
              <img
                className="w-[4.75rem] h-[3.375rem]"
                src={partner.logo}
                alt={partner.title}
              />
            </div>
            <h3 className="text-h3">{partner.title}</h3>
            <div className="flex gap-5">
              <div className="flex gap-3">
                <CircularProgress value={partner.sales.percent} />
                <div>
                  <p className="font-medium">Продажи</p>
                  <div className="flex items-center gap-x-3">
                    <span>
                      {new Intl.NumberFormat("ru", {
                        style: "currency",
                        currency: "RUB",
                        maximumFractionDigits: 0,
                      }).format(partner.sales.total)}
                    </span>
                    <span>{partner.sales.percent}%</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <CircularProgress value={partner.booking.percent} />
                <div>
                  <p className="font-medium">Букинги</p>
                  <div className="flex items-center gap-x-3">
                    <span>
                      {new Intl.NumberFormat("ru", {
                        style: "currency",
                        currency: "RUB",
                        maximumFractionDigits: 0,
                      }).format(partner.booking.total)}
                    </span>
                    <span>{partner.booking.percent}%</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
