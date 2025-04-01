import { cn } from "@/shared/lib/cn";
import { Navigation, useNavigationLinks } from "@/features/navigation";

type SidebarProps = {} & React.ComponentProps<"aside">;

export function Sidebar({ className, ...props }: SidebarProps) {
  const navigations = useNavigationLinks();

  return (
    <aside
      className={cn(
        "sticky top-6 max-h-fit space-y-5 ~m-md:~min-w-[11.375rem]/[14.375rem]",
        className,
      )}
      {...props}
    >
      <Navigation navigations={navigations} />
    </aside>
  );
}
