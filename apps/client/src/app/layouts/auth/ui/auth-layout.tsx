import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <main className="col-[main] mx-auto w-full max-w-[42rem] ~my-10/20">
      <Outlet />
    </main>
  );
}
