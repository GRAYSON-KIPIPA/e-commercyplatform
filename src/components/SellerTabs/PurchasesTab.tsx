import { Rating } from "@mui/material";
import { usePurchasedProductStore } from "../../store/purchasedProductStore";

const PurchasesTab = () => {
  const { purchasedProducts } = usePurchasedProductStore();
  return (
    <div className=" ">
      <div className="flex">
        {purchasedProducts.map((product) => (
          <div className="border flex flex-col mr-3 h-52 w-64 p-3">
            <div className="flex justify-center">
              <img src={product.image} className="h-28 w-24 rounded " />
            </div>
            <div className="font-bold text-sm">{product.name}</div>
            <div className="text-xs text-slate-500">{product.details}</div>
            <Rating size="small" />
            <div className="flex gap-10">
              <div className="text-sm text-slate-500">{product.dayremain}</div>
              <div className="text-md font-bold">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchasesTab;
