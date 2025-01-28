import { Button, ButtonProps } from "@/shared/ui/button";
import { type NavigationLinkType } from "../lib/use-navigation-links";
import { NavLink } from "react-router-dom";
import { cn } from "@/shared/lib/cn";

type NavigationLinkProps = {} & NavigationLinkType & ButtonProps;

export function NavigationLink({
  className,
  url,
  label,
  icon,
  notifications,
  isExternal,
  end,
}: NavigationLinkProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className={cn(
        "justify-start w-full whitespace-normal py-1 leading-[1.3] text-muted gap-2.5 group/link",
        className
      )}>
      <NavLink to={url} target={isExternal ? "_blank" : undefined} end={end}>
        {({ isActive }) => (
          <>
            {icon ? (
              <span
                className={cn(
                  "transition group-hover/link:text-border-accent",
                  {
                    "!text-primary": isActive,
                  }
                )}>
                {icon}
              </span>
            ) : null}
            <span
              className={cn("transition group-hover/link:text-foreground", {
                "!text-foreground": isActive,
              })}>
              {label}
            </span>
            {notifications ? (
              <span className="h-6 min-w-6 rounded-full text-sm font-normal px-1 inline-flex items-center justify-center bg-primary text-primary-foreground">
                {notifications}
              </span>
            ) : null}
          </>
        )}
      </NavLink>
    </Button>
  );
}
