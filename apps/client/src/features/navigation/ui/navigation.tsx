import { Fragment } from "react/jsx-runtime";
import { NavigationLinkType } from "../lib/use-navigation-links";
import { NavigationLink } from "./navigation-link";
import { RecursiveSublinks } from "./recursive-sublinks";
import { AnimatePresence } from "motion/react";

type NavigationProps = {
  navigations: NavigationLinkType[][];
};

export function Navigation({ navigations }: NavigationProps) {
  return navigations.map((navigation, index) => (
    <nav key={index}>
      {navigation.map((link) => (
        <Fragment key={link.url}>
          <NavigationLink {...link} />
          <AnimatePresence>
            {link.subLinks ? <RecursiveSublinks links={link.subLinks} /> : null}
          </AnimatePresence>
        </Fragment>
      ))}
    </nav>
  ));
}
