import { cn } from "@/shared/lib/cn";
import { NavLink } from "react-router-dom";
import { useSidebarNav } from "../lib/use-sidebar-nav";
import { Button } from "@/shared/ui/button";

type SidebarProps = {} & React.ComponentProps<"aside">;

export function Sidebar({ className, ...props }: SidebarProps) {
  const navigations = useSidebarNav();

  return (
    <aside
      className={cn("sticky top-6 max-h-screen space-y-5", className)}
      {...props}>
      {navigations.map((navigation, index) => (
        <nav className="flex flex-col" key={index}>
          {navigation.map((link) => (
            <Button
              variant="ghost"
              key={link.url}
              size="sm"
              asChild
              className="justify-start text-muted gap-[0.625rem]">
              <NavLink
                to={link.url}
                target={link.isExternal ? "_blank" : undefined}>
                {({ isActive }) => (
                  <>
                    <span
                      className={cn("transition-colors", {
                        "text-primary": isActive,
                      })}>
                      {link.icon}
                    </span>
                    <span
                      className={cn("transition-colors", {
                        "text-foreground": isActive,
                      })}>
                      {link.label}
                    </span>
                    {link.notifications ? (
                      <span className="h-6 min-w-6 rounded-full text-sm font-normal px-1 inline-flex items-center justify-center bg-primary text-primary-foreground">
                        {link.notifications}
                      </span>
                    ) : null}
                  </>
                )}
              </NavLink>
            </Button>
          ))}
        </nav>
      ))}
    </aside>
  );
}
