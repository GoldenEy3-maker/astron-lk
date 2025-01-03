import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { sessionQueryOptions } from "@/entities/session/api/session-loader";

export function ProtectedLayout() {
  useQuery(sessionQueryOptions());

  return <Outlet />;
}
