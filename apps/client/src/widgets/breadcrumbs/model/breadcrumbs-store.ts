import { create } from "zustand";

export type CrumbLabel = string | undefined;

type ParamLabel = {
  param: string;
  label: CrumbLabel;
};

type BreadcrumbsStore = {
  paramLabels: ParamLabel[];
} & BreadcrumbsStoreActions;

type BreadcrumbsStoreActions = {
  addParamLabel: (paramLabel: ParamLabel) => void;
};

export const useBreadcrumbsStore = create<BreadcrumbsStore>((set, get) => ({
  paramLabels: [],
  addParamLabel(paramLabel) {
    const paramLabels = get().paramLabels;
    const index = paramLabels.findIndex((p) => p.param === paramLabel.param);
    if (index !== -1) {
      paramLabels[index] = paramLabel;
    } else {
      paramLabels.push(paramLabel);
    }
    set({ paramLabels });
  },
}));
