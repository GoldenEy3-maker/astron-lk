import { createContext, useContext, ReactNode, useState } from "react";

export type CrumbLabel = string | undefined;

type DynamicParams = {
  param: string;
  label: CrumbLabel;
};

type BreadcrumbsContextType = {
  setDynamicParam: (param: string, value: CrumbLabel) => void;
  getDynamicParam: (param: string) => DynamicParams | undefined;
};

const BreadcrumbsContext = createContext<BreadcrumbsContextType>({
  setDynamicParam: () => {},
  getDynamicParam: () => undefined,
});

export function BreadcrumbsProvider({ children }: { children: ReactNode }) {
  const [params, setParams] = useState<DynamicParams[]>([]);

  const setDynamicParam = (param: string, value: CrumbLabel) => {
    const newParams = [...params];
    const index = newParams.findIndex((p) => p.param === param);
    if (index !== -1) {
      newParams[index] = { param, label: value };
    } else {
      newParams.push({ param, label: value });
    }
    setParams(newParams);
  };

  const getDynamicParam = (param: string) => {
    return params.find((p) => p.param === param);
  };

  return (
    <BreadcrumbsContext.Provider value={{ setDynamicParam, getDynamicParam }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
}

export const useBreadcrumbsContext = () => {
  const context = useContext(BreadcrumbsContext);
  if (!context) {
    throw new Error(
      "useBreadcrumbsContext must be used within a BreadcrumbsProvider",
    );
  }
  return context;
};
