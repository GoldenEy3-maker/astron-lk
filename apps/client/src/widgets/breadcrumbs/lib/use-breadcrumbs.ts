import { CrumbLabel, useBreadcrumbsStore } from "../model/breadcrumbs-store";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

export function useBreadcrumbs(param: string, label: CrumbLabel) {
  const { addParamLabel } = useBreadcrumbsStore(
    useShallow((state) => ({
      addParamLabel: state.addParamLabel,
    }))
  );

  useEffect(() => {
    addParamLabel({ param, label });
  }, [param, label]);
}
