import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useCustomerStore } from "../store/customerStore";
import CustomerService from "../services/customer";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { paginate } from "../components/pagination";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
const Customers = () => {
  const { customers, setCustomer } = useCustomerStore();
  const customerService = CustomerService();

  const navigate = useNavigate();
  function clickSingleCustomer(id: number) {
    navigate(`/customers/${id}`);
  }
  useEffect(() => {
    setCustomer(customerService.getCustomerList());
  }, []);

  //PAGINATION
  //step1 create a state variable to hold static list of posts

  //step2 create state variable for pagination
  const [currentPage, setCurrentPage] = useState(1);

  //setp3 use the paginate function to split the data into pages
  const pageSize = 10;
  const paginatedCustomers = paginate(customers, pageSize);
  const currentCustomers = paginatedCustomers[currentPage - 1];
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
        label="Search for images"
      />
      <div className="flex flex-row gap-4 m-1 flex-wrap">
        {/* starting my PAGINATION code here */}
        {currentCustomers &&
          currentCustomers.map((post) => (
            <div key={post.id}>
              <div className="border h-40 w-40 p-4 flex flex-col justify-center">
                <a
                  onClick={() => {
                    clickSingleCustomer(post.id);
                  }}
                >
                  <img src={post.image} className="rounded-full h-20 w-20" />
                </a>
                <div className="font-bold">{post.name}</div>
                <div className="text-xs text-slate-400">{post.email}</div>
              </div>
            </div>
          ))}
      </div>
      {/* Step 5: Render the Material-UI Pagination component */}
      {paginatedCustomers.length > 1 && (
        <div className="flex justify-center mb-4">
          <Pagination
            // page={1}
            // count={99}
            count={paginatedCustomers.length}
            page={currentPage}
            onChange={(_, newPage) => setCurrentPage(newPage)}
          />
        </div>
      )}
    </div>
  );
};

export default Customers;
