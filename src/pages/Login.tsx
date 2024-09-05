import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className=" border-1 mt-36">
      <Box
        sx={{ width: 500 }}
        className="flex justify-center  grid grid-rows gap-4"
      >
        <div className="gap-1">
          <Typography className="font-semibold">Login to ShopKonect</Typography>
          <Typography className="text-sm font-light">
            Please enter your email and password to sign into the system
          </Typography>
        </div>
        <div>
          <Typography className="font-semibold">Email</Typography>
          <TextField
            type="email"
            id="outlined-basic"
            label="example@mail.com"
            variant="outlined"
            size="small"
            className="w-96 rounded-3xl"
          />
        </div>
        <div>
          <div className="flex gap-64">
            <Typography className="font-semibold">Password</Typography>
            <Typography className="font-normal">
              <a href="#">forgot</a>
            </Typography>
          </div>
          <TextField
            id="outlined-basic"
            label="your password"
            variant="outlined"
            size="small"
            className="w-96 rounded-full"
          />
        </div>
        <Button
          className="w-96"
          variant="contained"
          onClick={() => navigate("/home")}
        >
          Login
          <TrendingFlatOutlinedIcon />
        </Button>
      </Box>
    </div>
  );
};

export default Login;
