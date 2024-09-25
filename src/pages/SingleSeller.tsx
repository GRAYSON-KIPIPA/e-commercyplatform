import IconButton from "@mui/material/IconButton";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { useNavigate, useParams } from "react-router-dom";
import SellerTabs from "../components/SellerTabs/SellerTabs";
import { useEffect, useState } from "react";
import { useSellerStore } from "../store/sellerStore";
import SellerService from "../services/seller";
import { CircularProgress, LinearProgress } from "@mui/material";

const SingleSeller = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();
  const ID = Number(id);

  const sellerService = SellerService();
  const { sellers, setSeller } = useSellerStore();

  useEffect(() => {
    setIsLoading(true);
    function fetchSellers() {
      setSeller(sellerService.getSellers());
      setIsLoading(false);
    }

    const timer = setTimeout(() => {
      fetchSellers();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="col ml-8">
      <div className="flex flex-row mt-2">
        <IconButton
          className="flex bg-slate-200 ml-6  rounded"
          onClick={() => navigate("/sellers")}
        >
          <ChevronLeftOutlinedIcon className="text-sm" />
        </IconButton>
        <div className="text-sm ml-2 mt-1">Back to Sellers</div>
      </div>
      {isLoading ? (
        <div className="mt-4 place-content-center">
          <LinearProgress />
        </div>
      ) : (
        <>
          <div className="flex mt-6 row">
            <div className="flex w-1/2 place-content-end">
              {sellers.map((seller) =>
                seller.id === ID ? (
                  <div>
                    <div className="border flex flex-col h-50 w-60 flex items-center   ">
                      <img
                        src={seller.image}
                        className="h-20 w-20 rounded-full mt-7"
                      />
                      <div className="font-bold text-sm">{seller.name}</div>
                      <div className="text-xs text-slate-500">
                        Product manager at tech_core
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
            <div className="w-1/2 ml-10">
              <div className="text-sm font-bold m-">Contact Information</div>
              <div className="m-1">
                <div className="text-slate-400">Email Address</div>
                <div className="font-bold">Samiajamal@gmail.com</div>
              </div>
              <div className="m-1">
                <div className="text-slate-400">Phone Number</div>
                <div className="font-bold">+255 678 931 212</div>
              </div>
              <div className="m-1">
                <div className="text-slate-400">Address</div>
                <div className="font-bold">
                  Tanzania, Dar es salaam, Makumbusho
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <SellerTabs />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleSeller;
