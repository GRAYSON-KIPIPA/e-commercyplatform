import CustomerTabs from "../components/CustomerTabs/CustomerTabs";
import IconButton from "@mui/material/IconButton";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { useNavigate } from "react-router-dom";

const SingleCustomer = () => {
  const navigate = useNavigate();

  return (
    <div className="col ml-8">
      <div className="flex flex-row mt-2">
        <IconButton
          className="flex bg-slate-200 ml-6  rounded"
          onClick={() => navigate("/customers")}
        >
          <ChevronLeftOutlinedIcon className="text-sm" />
        </IconButton>
        <div className="text-sm ml-2 mt-1">Back to Customers</div>
      </div>
      <div className="flex mt-6 row">
        <div className="flex w-1/2 place-content-end">
          <div className="border flex flex-col h-50 w-60 flex items-center   ">
            <img src="person3.jpg" className="h-20 w-20 rounded-full mt-7" />
            <div className="font-bold text-sm">Kipipa Keneth</div>
            <div className="text-xs text-slate-500">
              Product manager at tech_core
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-10">
          <div className="text-sm font-bold m-">Contact Information</div>
          <div className="m-1">
            <div className="text-slate-400">Email Address</div>
            <div className="font-bold">Kipipa@gmail.com</div>
          </div>
          <div className="m-1">
            <div className="text-slate-400">Phone Number</div>
            <div className="font-bold">+255 678 931 212</div>
          </div>
          <div className="m-1">
            <div className="text-slate-400">Address</div>
            <div className="font-bold">Tanzania, Dar es salaam, Makumbusho</div>
          </div>
        </div>
      </div>
      <div className="row">
        <CustomerTabs />
      </div>
    </div>
  );
};

export default SingleCustomer;
