import { create } from "zustand";
import { SellerI } from "../modals/Seller";

interface SellerList {
  sellers: SellerI[];
  setSeller: (sellers: SellerI[]) => void;
}

export const useSellerStore = create<SellerList>((set) => ({
  sellers: [],
  setSeller: (sellers) => set({ sellers }),
}));
