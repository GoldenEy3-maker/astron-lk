import { Sidebar } from "@/widgets/sidebar";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <main className="grid col-[main] grid-cols-subgrid ~pt-10/[3.75rem] ~pb-16/[6.25rem] auto-rows-max">
      <Sidebar className="m-xl:col-span-4 m-xl:block hidden" />
      <div className="m-xl:col-[6/main] col-[main] grid grid-cols-subgrid">
        <Outlet />
      </div>
    </main>
  );
}
