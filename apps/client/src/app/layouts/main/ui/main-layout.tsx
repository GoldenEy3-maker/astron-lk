import { getSessionQueryOptions } from "@/shared/api/session-query";
import { Sidebar } from "@/widgets/sidebar";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  useQuery(getSessionQueryOptions());
  return (
    <main className="grid col-[main] grid-cols-subgrid ~pt-10/[3.75rem] ~pb-16/[6.25rem] auto-rows-max">
      <Sidebar className="min-[75rem]:col-span-4 min-[75rem]:block hidden" />
      <div className="min-[75rem]:col-[6/main] col-[main] grid grid-cols-subgrid">
        <Outlet />
      </div>
    </main>
  );
}
