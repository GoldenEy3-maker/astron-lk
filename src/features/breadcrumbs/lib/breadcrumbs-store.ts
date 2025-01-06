import { create } from "zustand";

export type BreadcrumbPath = {
  href: string;
  label: string | undefined;
};

export type CurrentPage = string | undefined;

type BreadcrumbsStoreActions = {
  setPaths: (paths: BreadcrumbPath[]) => void;
  setCurrentPage: (currentPage: CurrentPage) => void;
};

type BreadcrumbsStore = {
  paths: BreadcrumbPath[];
  currentPage: CurrentPage;
} & BreadcrumbsStoreActions;

export const useBreadcrumbsStore = create<BreadcrumbsStore>((set) => ({
  paths: [],
  currentPage: undefined,
  setPaths(paths) {
    set({ paths });
  },
  setCurrentPage(currentPage) {
    set({ currentPage });
  },
}));
