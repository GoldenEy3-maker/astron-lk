import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layouts/root.tsx";

const HomePage = lazy(() =>
  import("./pages/home.tsx").then((module) => ({ default: module.HomePage }))
);
const AboutPage = lazy(() =>
  import("./pages/about.tsx").then((module) => ({ default: module.AboutPage }))
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
