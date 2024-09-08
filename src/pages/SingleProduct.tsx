import {
  CircularProgress,
  IconButton,
  Rating,
  TableCell,
  TableRow,
} from "@mui/material";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import ProductService from "../services/product";
import { useState, useEffect } from "react";

const SingleProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let { id } = useParams();
  const ID = Number(id);
  const productService = ProductService();
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    setIsLoading(true);
    function fetchProducts() {
      setProducts(productService.getProductList());
    }
    const timer = setTimeout(() => {
      fetchProducts();
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className="flex flex-row mt-2">
        <IconButton
          className="flex bg-slate-200 ml-6  rounded"
          onClick={() => navigate("/customers")}
        >
          <ChevronLeftOutlinedIcon className="text-sm" />
        </IconButton>
        <div className="text-sm ml-2 mt-1">Back to Products</div>
      </div>
      {isLoading ? (
        <div className="flex mt-48 place-content-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          {products?.map((product) =>
            product.id === ID ? (
              <div className="flex row">
                <div className="col w-1/2">
                  <div className="border  w-80 p-4">
                    <img src={product.image} className="rounded" />
                  </div>
                  <div className="flex  gap-2 mt-2">
                    <div className="border h-28 p-4 w-28">
                      <img
                        src={product.image}
                        width={80}
                        height={200}
                        className="rounded"
                      />
                    </div>
                    <div className="border h-28 p-4 w-28">
                      <img
                        src={product.image}
                        width={80}
                        height={200}
                        className="rounded"
                      />
                    </div>
                    <div className="border h-28 p-4 w-28">
                      <img
                        src={product.image}
                        width={80}
                        height={200}
                        className="rounded"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex col w-1/2">
                  <div>
                    <div className="text-2xl font-bold">{product.name}</div>
                    <div className="text-md">{product.details}</div>
                    <div className="flex gap-6 mt-5">
                      <Rating />
                      <div>121 Views</div>
                      <div>89 sold</div>
                      <div>13 Remaining</div>
                    </div>
                    <TableRow>
                      <TableCell>
                        <strong className="text-2xl text-center">
                          TZS 32,000,000
                        </strong>
                      </TableCell>
                    </TableRow>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </>
      )}
    </div>
  );
};

export default SingleProduct;
