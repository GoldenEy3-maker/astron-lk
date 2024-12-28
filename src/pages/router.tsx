import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootLayout } from "./layouts/root";
import { lazy } from "react";

const HomePage = lazy(() =>
  import("./home").then((module) => ({
    default: module.HomePage,
  }))
);
const AboutPage = lazy(() =>
  import("./about").then((module) => ({
    default: module.AboutPage,
  }))
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);
