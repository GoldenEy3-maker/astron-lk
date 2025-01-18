import { create } from "zustand";

type MobileSheetStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useMobileSheetStore = create<MobileSheetStore>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
