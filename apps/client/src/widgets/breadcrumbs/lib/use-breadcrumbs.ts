import { useEffect } from "react";
import { useBreadcrumbsContext } from "../model/breadcrumbs-context";
import { CrumbLabel } from "../model/breadcrumbs-context";

export function useBreadcrumbs(param: string, label: CrumbLabel) {
  const { setDynamicParam } = useBreadcrumbsContext();

  useEffect(() => {
    setDynamicParam(param, label);
  }, [param, label]);
}
