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
        "group/link w-full justify-start gap-2.5 whitespace-normal py-1 leading-[1.3] text-muted",
        className,
      )}
    >
      <NavLink to={url} target={isExternal ? "_blank" : undefined} end={end}>
        {({ isActive }) => (
          <>
            {icon ? (
              <span
                className={cn(
                  "transition group-hover/link:text-border-accent",
                  {
                    "!text-primary": isActive,
                  },
                )}
              >
                {icon}
              </span>
            ) : null}
            <span
              className={cn("transition group-hover/link:text-foreground", {
                "!text-foreground": isActive,
              })}
            >
              {label}
            </span>
            {notifications ? (
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-1 text-sm font-normal text-primary-foreground">
                {notifications}
              </span>
            ) : null}
          </>
        )}
      </NavLink>
    </Button>
  );
}
