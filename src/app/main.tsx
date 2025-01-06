import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/config/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
