import { useEffect, useMemo, useRef } from "react";

export const useCallbackRef = <Args extends unknown[], Return>(
  callback: ((...args: Args) => Return) | undefined,
): ((...args: Args) => Return) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(
    () =>
      ((...args: Args) => callbackRef.current?.(...args)) as (
        ...args: Args
      ) => Return,
    [],
  );
};
