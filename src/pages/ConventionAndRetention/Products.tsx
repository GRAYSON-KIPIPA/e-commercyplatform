import { Pagination, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const products = [
  {
    image: "playstation.png",
    details: "PlayStation 5 Gaming Console",
    info: "White, fairtrade certified, cotton",
  },
  {
    image: "phone.png",
    details: "MP3 Music Player",
    info: "White, fairtrade certified, cotton",
  },
  {
    image: "miniplayer.png",
    details: "Mini MP3 Player",
    info: "White, fairtrade certified, cotton",
  },
  {
    image: "daisy.png",
    details: "Daisy, Walkman",
    info: "White, fairtrade certified, cotton",
  },
];

const reversedProducts = [
  {
    image: "daisy.png",
    details: "Daisy, Walkman",
    info: "White, fairtrade certified, cotton",
  },
  {
    image: "miniplayer.png",
    info: "White, fairtrade certified, cotton",
    details: "Mini MP3 Player",
  },
  {
    image: "phone.png",
    info: "White, fairtrade certified, cotton",
    details: "MP3 Music Player",
  },
  {
    image: "playstation.png",
    info: "White, fairtrade certified, cotton",
    details: "PlayStation 5 Gaming Console",
  },
];
const Products = () => {
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
      <div className="flex flex-row ">
        {products.map((product) => (
          <div className="border m-2 p-4 w-92">
            <a href="/singleproduct">
              <img src={product.image} width={100} height={20} />
            </a>
            <Typography className="font-bold text-sm mt-1">
              {product.details}
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
      <div className="flex flex-row ">
        {reversedProducts.map((product) => (
          <div className="border m-2 p-4 w-92">
            <img src={product.image} width={100} height={20} />
            <Typography className="font-bold text-sm mt-1">
              {product.details}
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
      <div className="flex flex-row ">
        {products.map((product) => (
          <div className="border m-2 p-4 w-92 ">
            <img src={product.image} width={100} height={20} />
            <Typography className="font-bold text-sm mt-1">
              {product.details}
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
      {/* <Pagination count={10} page={page} onChange={handleChange} /> */}
      <div className="flex justify-center mb-4">
        <Pagination count={99} />
      </div>
    </div>
  );
};

export default Products;
