import { useRef } from "react";

export function useScrollTo(
  args?: ScrollIntoViewOptions & { ref?: React.RefObject<HTMLDivElement> }
) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollTo = () => {
    (args?.ref ?? ref).current?.scrollIntoView(args);
  };
  return { ref, scrollTo };
}
