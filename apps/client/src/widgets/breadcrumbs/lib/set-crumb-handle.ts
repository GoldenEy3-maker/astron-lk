import { CrumbLabel } from "../model/breadcrumbs-store";
import { CrumbHandle } from "../ui/breadcrumbs";

export function setCrumbHandle(path: string, label: CrumbLabel): CrumbHandle {
  return {
    crumb: { href: path, label },
  };
}

export function setCrumbHandleFromParams(param: string): CrumbHandle {
  return {
    crumb: (crumbFromParams) => ({
      param,
      ...crumbFromParams,
    }),
  };
}
