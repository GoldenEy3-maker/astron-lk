import { type NavigationLinkType } from "../lib/use-navigation-links";
import { cn } from "@/shared/lib/cn";
import { NavigationLink } from "./navigation-link";
import { Fragment } from "react/jsx-runtime";
import { AnimatePresence, motion } from "motion/react";

type RecursiveSublinksProps = {
  links: NavigationLinkType[];
  level?: number;
};

export function RecursiveSublinks({
  links,
  level = 0,
}: RecursiveSublinksProps) {
  return (
    <motion.div
      key={level}
      className={cn("mt-1 pl-9", { "pl-4": level > 0 })}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      {links.map((link) => (
        <Fragment key={link.url}>
          <NavigationLink {...link} />
          <AnimatePresence>
            {link.subLinks ? (
              <RecursiveSublinks links={link.subLinks} level={level + 1} />
            ) : null}
          </AnimatePresence>
        </Fragment>
      ))}
    </motion.div>
  );
}
