import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div>
      <nav>
        <Button asChild variant="link">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="link">
          <Link to="/about">About</Link>
        </Button>
      </nav>
      <Outlet />
    </div>
  );
}
