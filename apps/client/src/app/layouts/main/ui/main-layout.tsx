import { Sidebar } from "@/widgets/sidebar";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <main className="col-[main] grid auto-rows-max grid-cols-subgrid ~pt-10/[3.75rem] ~pb-16/[6.25rem]">
      <Sidebar className="hidden m-md:col-span-4 m-md:block" />
      <div className="col-[main] grid grid-cols-subgrid m-md:col-[6/main]">
        <Outlet />
      </div>
    </main>
  );
}
