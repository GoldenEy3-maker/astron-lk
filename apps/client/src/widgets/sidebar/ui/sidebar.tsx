import { cn } from "@/shared/lib/cn";
import { Navigation, useNavigationLinks } from "@/features/navigation";

type SidebarProps = {} & React.ComponentProps<"aside">;

export function Sidebar({ className, ...props }: SidebarProps) {
  const navigations = useNavigationLinks();

  return (
    <aside
      className={cn(
        "sticky top-6 max-h-fit min-w-[14.375rem] space-y-5",
        className,
      )}
      {...props}
    >
      <Navigation navigations={navigations} />
    </aside>
  );
}
