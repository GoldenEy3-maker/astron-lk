import { apiClient } from "@/shared/api";
import { Routes } from "@/shared/constants/routes";
import { useAuth } from "@/shared/store/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function ProtectedLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const setAuthUser = useAuth((state) => state.setUser);

  const { isError, data, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: ({ signal }) => apiClient.getSession({ signal }),
  });

  useEffect(() => {
    if (!isLoading && data) {
      setAuthUser(data);
    } else if (isError) {
      navigate(`${Routes.Login}?callbackUrl=${location.pathname}`);
    }
  }, [isError, data, isLoading]);

  return <Outlet />;
}
