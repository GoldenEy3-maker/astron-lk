import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <main className="~my-10/20 col-[main] w-full mx-auto max-w-[42rem]">
      <Outlet />
    </main>
  );
}
