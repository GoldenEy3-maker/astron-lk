import { useRef } from "react";

export function useScrollTo(args?: boolean | ScrollIntoViewOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollTo = () => {
    ref.current?.scrollIntoView(args);
  };
  return { ref, scrollTo };
}
