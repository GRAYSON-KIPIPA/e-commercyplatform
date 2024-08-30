import { IconButton, Rating, TableCell, TableRow } from "@mui/material";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex">
        <IconButton
          className="flex bg-slate-200 ml-6"
          onClick={() => navigate("/products")}
        >
          <ChevronLeftOutlinedIcon />
        </IconButton>
      </div>
      <div className="flex">
        <div className=" col">
          <div className="ml-6 ">
            <img src="daisy.png" width={900} height={500} />
          </div>
          <div className="flex flex-row gap-2 m-6">
            <img src="daisy.png" width={80} height={200} className="rounded" />
            <img src="daisy.png" width={80} height={200} className="rounded" />
            <img src="daisy.png" width={80} height={200} className="rounded" />
          </div>
        </div>
        <div className="col mt-3 ml-10">
          <div className=" font-bold text-xl">Daisy Walkman</div>
          <p className="text-xs">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
          <div className="flex flex-row gap-6 mt-5">
            <Rating />
            <div>121 Views</div>
            <div>89 sold</div>
            <div>13 Remaining</div>
          </div>
          <TableRow>
            <TableCell>
              <strong className="text-2xl text-center">TZS 32,000,000</strong>
            </TableCell>
          </TableRow>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
