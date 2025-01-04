import { getSessionQueryOptions } from "@/entities/session";
import { Sidebar } from "@/widgets/sidebar";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  useQuery(getSessionQueryOptions());
  return (
    <main className="grid col-[main] grid-cols-subgrid pt-[3.75rem] pb-[6.25rem] auto-rows-max">
      <Sidebar className="col-span-4" />
      <div className="col-[6/main]">
        <Outlet />
      </div>
    </main>
  );
}
