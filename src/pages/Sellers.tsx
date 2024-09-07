import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useSellerStore } from "../store/sellerStore";
import SellerService from "../services/seller";
import { useEffect, useState } from "react";
import { paginate } from "../components/pagination";
import Pagination from "@mui/material/Pagination";
const Sellers = () => {
  const navigate = useNavigate();
  function clickSingleSeller(id: number) {
    navigate(`/sellers/${id}`);
  }

  const { sellers, setSeller } = useSellerStore();
  const sellerService = SellerService();

  useEffect(() => {
    setSeller(sellerService.getSellers());
  }, []);

  //PAGINATION CODES
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const paginatedSellers = paginate(sellers, pageSize);
  const currentSellers = paginatedSellers[currentPage - 1];
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
        {currentSellers &&
          currentSellers.map((seller) => (
            <div className="border h-40 w-40 p-4 flex flex-col justify-center">
              <a onClick={() => clickSingleSeller(seller.id)}>
                <img src={seller.image} className="rounded-full h-20 w-20" />
              </a>
              <div className="font-bold">{seller.name}</div>
              <div className="text-xs text-slate-400">{seller.email}</div>
            </div>
          ))}
      </div>
      {/* Step 5: Render the Material-UI Pagination component */}
      {paginatedSellers.length > 1 && (
        <div className="flex justify-center mb-4">
          <Pagination
            // page={1}
            // count={99}
            count={paginatedSellers.length}
            page={currentPage}
            onChange={(_, newPage) => setCurrentPage(newPage)}
          />
        </div>
      )}
    </div>
  );
};

export default Sellers;
