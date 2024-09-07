import { create } from "zustand";
import { CustomerI } from "../modals/Customer";

interface CustomerStore {
  customers: CustomerI[];
  setCustomer: (customers: CustomerI[]) => void;
}

export const useCustomerStore = create<CustomerStore>((set) => ({
  customers: [],
  setCustomer: (customers) => set({ customers }),
}));
