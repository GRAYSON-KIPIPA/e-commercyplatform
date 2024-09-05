import { Pagination, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { products } from "../../store/productStore";

const Products = () => {
  const navigate = useNavigate();

  function handleClickProduct(id: number) {
    //navigate to single product view
    navigate(`/products/${id}`);
  }
  const [value, setValue] = React.useState<number | null>(2);
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
        {products.map((product) => (
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
      <div className="flex justify-center mb-4">
        <Pagination page={1} count={99} />
      </div>
    </div>
  );
};

export default Products;
