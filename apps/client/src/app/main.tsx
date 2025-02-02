import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/config/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/react";
import { BreadcrumbsProvider } from "@/widgets/breadcrumbs";
import "./styles/globals.css";

const router = createRouter();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <NuqsAdapter>
      <BreadcrumbsProvider>
        <RouterProvider router={router} />
      </BreadcrumbsProvider>
    </NuqsAdapter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
