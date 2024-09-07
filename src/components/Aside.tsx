import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Avatar, IconButton, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <Stack>
      <Drawer
        className=""
        PaperProps={{
          sx: {
            bgcolor: "black",
            color: "grey",
          },
        }}
        variant="permanent"
      >
        <div className="p-4 flex justify-start">
          <img src="./src/assets/ShopKonekt.png" width={200} className="" />
        </div>
        <TextField
          size="small"
          className="bg-gray-600 w-5/6  rounded-xl "
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon className="text-slate-500" />
              </InputAdornment>
            ),
          }}
        />
        <Typography className="ml-3 mt-3 font-light ">MENU</Typography>
        {/* Accordion */}
        <Accordion disableGutters className="bg-black text-stone-500 ">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-slate-500 " />}
          >
            <SpaceDashboardTwoToneIcon className="mt-2 text-sm" />
            <ListItemText className="ml-2 ">Overview</ListItemText>
          </AccordionSummary>
          <AccordionDetails className="">
            <ListItemButton
              className="hover:bg-blue-900 hover:rounded-full hover:text-white"
              component={Link}
              to="/home"
              style={{ maxHeight: "40px" }}
            >
              <ShoppingBagOutlinedIcon
                className="text-sm"
                style={{ color: "grey" }}
              />
              <ListItemText className="ml-1">Transactions</ListItemText>
            </ListItemButton>
            <ListItemButton
              className="hover:bg-blue-900 hover:rounded-full hover:text-white"
              component={Link}
              to="/conversion"
              style={{ maxHeight: "40px" }}
            >
              <ShoppingBagOutlinedIcon
                className="text-sm"
                style={{ color: "grey" }}
              />
              <ListItemText className=" text-xs ml-1">
                Conversion & Retention
              </ListItemText>
            </ListItemButton>
          </AccordionDetails>
        </Accordion>
        <ListItemButton
          className="hover:bg-blue-900 hover:rounded-full hover:text-white"
          component={Link}
          to="/products"
          style={{ maxHeight: "40px" }}
        >
          <ShoppingBagOutlinedIcon
            className="text-sm"
            style={{ color: "grey" }}
          />
          <ListItemText className="ml-2">Products</ListItemText>
        </ListItemButton>
        <ListItemButton
          className="hover:bg-blue-900 hover:rounded-full hover:text-white"
          component={Link}
          to="/customers"
          style={{ maxHeight: "40px" }}
        >
          <GroupOutlinedIcon className="text-sm" style={{ color: "grey" }} />
          <ListItemText className="ml-2">Customers</ListItemText>
        </ListItemButton>
        <ListItemButton
          className=" hover:bg-blue-900 hover:rounded-full hover:text-white"
          component={Link}
          to="/sellers"
          style={{ maxHeight: "40px" }}
        >
          <GroupOutlinedIcon className="text-sm" style={{ color: "grey" }} />
          <ListItemText className="text-3xl ml-2">Sellers</ListItemText>
        </ListItemButton>
        <div className="mt-24 text-xs text-grey fixed bottom-0">
          <Typography className="text-xs ml-5">PROFILE</Typography>
          <div className="py-4  px-4 max-w-sm mx-auto bg-black rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-start sm:space-y-0 sm:space-x-6 group ">
            <Avatar
              className="block mx-auto h-9 rounded-full sm:mx-0 bg-black text-black text-center bg-white"
              src="person5.jpg "
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-white font-semibold">
                  Erin Lindford
                </p>
                <p className="text-slate-500 font-small">Product Engineer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <IconButton
              component={Link}
              to="/login"
              className="mt-2 flex content-center text-center text-gray-500 mb-4"
            >
              <LogoutOutlinedIcon className="text-sm" />
              <div className="text-sm">Logout</div>
            </IconButton>
          </div>
        </div>
      </Drawer>
    </Stack>
  );
}
export default Aside;
