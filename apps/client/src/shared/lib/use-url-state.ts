import { useQueryState, UseQueryStateOptions, UseQueryStateReturn } from "nuqs";
import { useEffect } from "react";

export function useURLState<T>(
  key: string,
  options: UseQueryStateOptions<T>
): UseQueryStateReturn<T & {}, undefined> {
  const [state, setState] = useQueryState<T>(key, options);

  useEffect(() => {
    return () => {
      setState(null);
    };
  }, []);

  return [state, setState];
}
