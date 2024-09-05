import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { sellerStore } from "../store/sellerStore";
import { useNavigate } from "react-router-dom";
const Sellers = () => {
  const navigate = useNavigate();

  function clickSingleSeller(id: number) {
    navigate(`/sellers/${id}`);
  }
  return (
    <div className="ml-4">
      <div className="font-bold m-2">Customers</div>
      <TextField
        sx={{ width: 1000 }}
        size="small"
        className=" m-2 rounded-full"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon className="text-slate-500" />
            </InputAdornment>
          ),
        }}
        label="Search for sellers"
      />
      <div className="flex flex-row flex-wrap gap-4 m-1">
        {sellerStore.map((seller) => (
          <div className="border h-40 w-40 p-4 flex flex-col justify-center">
            <a onClick={() => clickSingleSeller(seller.id)}>
              <img src={seller.image} className="rounded-full h-20 w-20" />
            </a>
            <div className="font-bold">{seller.name}</div>
            <div className="text-xs text-slate-400">{seller.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sellers;
