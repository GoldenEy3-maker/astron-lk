import { cn } from "@/shared/lib/cn";
import { Navigation, useNavigationLinks } from "@/features/navigation";
import { ScrollArea } from "@/shared/ui/scroll-area";

type SidebarProps = {} & React.ComponentProps<"aside">;

export function Sidebar({ className, ...props }: SidebarProps) {
  const navigations = useNavigationLinks();

  return (
    <ScrollArea
      className={cn("!sticky top-6 max-h-[calc(100svh-1.5rem)]", className)}
      viewportClassName="pb-4"
    >
      <aside
        className="space-y-5 ~m-md:~min-w-[11.375rem]/[14.375rem]"
        {...props}
      >
        <Navigation navigations={navigations} />
      </aside>
    </ScrollArea>
  );
}
