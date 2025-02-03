import { CurrentBulletins } from "@/entities/document";
import { PartnerCard } from "@/entities/partner";
import { CurrentNews } from "@/entities/news";
import { Kpi } from "@/widgets/kpi";
import { FeedbackCard } from "@/features/feedback";
import { Factory } from "@/widgets/factory";
import { Academy } from "@/entities/academy";
import { useQuery } from "@tanstack/react-query";
import { getSessionQueryOptions } from "@/shared/api/session-query";

export function HomePage() {
  const { data: session } = useQuery(getSessionQueryOptions());
  return (
    <div className="main-space col-span-full grid grid-cols-subgrid">
      {session?.role === "partner" ? (
        <>
          <PartnerCard className="col-span-full" />
          <Kpi className="col-span-full" />
        </>
      ) : null}
      <CurrentNews className="col-span-full" />
      <CurrentBulletins className="col-span-full" />
      <Academy className="col-span-full" />
      <Factory className="col-span-full" />
      <FeedbackCard className="col-span-full" />
    </div>
  );
}
