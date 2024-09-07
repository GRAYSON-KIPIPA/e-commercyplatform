import { Pagination, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import ProductService from "../services/product";
import { paginate, paginateProduct } from "../components/pagination";

const Products = () => {
  const productService = ProductService();
  const navigate = useNavigate();
  const { products, setProducts } = useProductStore();

  function handleClickProduct(id: number) {
    navigate(`/products/${id}`);
  }
  const [value, setValue] = React.useState<number | null>(2);

  useEffect(() => {
    setProducts(productService.getProductList());
  }, []);

  //PAGINATION CODES
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;
  const paginatedProducts = paginateProduct(products, pageSize);
  const currentProducts = paginatedProducts[currentPage - 1];

  return (
    <div className="ml-5">
      <div className="font-bold m-2">Products</div>
      <TextField
        sx={{ width: 650 }}
        size="small"
        className=" m-2 rounded-full"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon className="text-slate-500" />
            </InputAdornment>
          ),
        }}
        label="Search for products"
      />
      <div></div>
      <div className="flex flex-row flex-wrap w-[100%]">
        {currentProducts &&
          currentProducts.map((product) => (
            <div
              onClick={() => handleClickProduct(product.id)}
              className="border m-2 p-4 basis-1/5"
            >
              <img
                src={product.image}
                width={100}
                height={20}
                onClick={() => handleClickProduct(product.id)}
              />
              <Typography className="font-bold text-sm mt-1">
                {product.name}
              </Typography>
              <Typography className="text-xs text-slate-400">
                {product.info}
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          ))}
      </div>
      {/* Step 5: Render the Material-UI Pagination component */}
      {paginatedProducts.length > 1 && (
        <div className="flex justify-center mb-4">
          <Pagination
            // page={1}
            // count={99}
            count={paginatedProducts.length}
            page={currentPage}
            onChange={(_, newPage) => setCurrentPage(newPage)}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
