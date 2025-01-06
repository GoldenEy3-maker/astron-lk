import { useEffect } from "react";
import {
  BreadcrumbPath,
  CurrentPage,
  useBreadcrumbsStore,
} from "../lib/breadcrumbs-store";
import { useShallow } from "zustand/react/shallow";

export function useBreadcrumbs(
  paths: BreadcrumbPath[],
  currentPage: CurrentPage
) {
  const { setCurrentPage, setPaths } = useBreadcrumbsStore(
    useShallow((state) => ({
      setPaths: state.setPaths,
      setCurrentPage: state.setCurrentPage,
    }))
  );

  useEffect(() => {
    setPaths(paths);
    setCurrentPage(currentPage);
    return () => {
      setPaths([]);
      setCurrentPage(undefined);
    };
  }, [paths, currentPage]);
}
