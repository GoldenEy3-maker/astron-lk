import { Toaster } from "@/shared/ui/sonner";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="main-container max-container min-h-svh grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
      <Toaster richColors position="bottom-center" />
    </div>
  );
}
