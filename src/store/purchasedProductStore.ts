import { PurchasedProductI } from "../modals/PurchasedProduct";
import { create } from "zustand";
const PurchasedProductStore: PurchasedProductI[] = [
  {
    image: "/public/phone.png",
    name: "MP3 Music Player",
    details: "white, fairtrade certified, cotton",
    dayremain: "1 day ago",
    price: "TZS 250,000",
  },
  {
    image: "/public/miniplayer.png",
    name: "MinMP3 Player",
    details: "white, fairtrade certified, cotton",
    dayremain: "20 days ago",
    price: "TZS 450,000",
  },
  {
    image: "/public/daisy.png",
    name: "Daisy, Walkman",
    details: "white, fairtrade certified, cotton",
    dayremain: "29 days ago",
    price: "TZS 1,000,000",
  },
];

interface PurchasedProduct {
  purchasedProducts: PurchasedProductI[];
}

export const usePurchasedProductStore = create<PurchasedProduct>(() => ({
  purchasedProducts: PurchasedProductStore,
}));
