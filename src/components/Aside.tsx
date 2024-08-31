import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Avatar, TextField } from "@mui/material";
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
          sx: { bgcolor: "black", color: "grey" },
        }}
        variant="permanent"
      >
        <img src="./src/assets/ShopKonekt.png" width={200} className="ml-6" />
        <TextField
          size="small"
          className="bg-slate-400 w-5/6 rounded-xl ml-1"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon className="text-slate-500" />
              </InputAdornment>
            ),
          }}
        />
        <Typography className="ml-9 mt-3 font-light ">MENU</Typography>
        {/* Accordion */}
        <ListItem>
          <Accordion className="w-68 bg-black text-stone-500 mb-0 ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <SpaceDashboardTwoToneIcon className=" text-sm mt-2" />
              <ListItemText className="ml-2 ">Overview</ListItemText>
            </AccordionSummary>
            <AccordionDetails className="">
              <ListItem className="hover:bg-blue-900 hover:rounded-full hover:text-white">
                <ListItemButton component={Link} to="/home">
                  <ShoppingBagOutlinedIcon
                    className="text-sm"
                    style={{ color: "grey" }}
                  />
                  <ListItemText className="ml-1">Transactions</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem className="hover:bg-blue-900 hover:rounded-full hover:text-white">
                <ListItemButton component={Link} to="/conversion">
                  <ShoppingBagOutlinedIcon
                    className="text-sm"
                    style={{ color: "grey" }}
                  />
                  <ListItemText className=" text-xs ml-1">
                    Conversion & Retention
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem className="hover:bg-blue-900 hover:rounded-full hover:text-white">
          <ListItemButton component={Link} to="/products">
            <ShoppingBagOutlinedIcon
              className="text-sm"
              style={{ color: "grey" }}
            />
            <ListItemText className="ml-2">Products</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem className="hover:bg-blue-900 hover:rounded-full hover:text-white">
          <ListItemButton component={Link} to="/customers">
            <GroupOutlinedIcon className="text-sm" style={{ color: "grey" }} />
            <ListItemText className="ml-2">Customers</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem className=" hover:bg-blue-900 hover:rounded-full hover:text-white">
          <ListItemButton component={Link} to="/sellers">
            <GroupOutlinedIcon className="text-sm" style={{ color: "grey" }} />
            <ListItemText className="text-xl ml-2">Sellers</ListItemText>
          </ListItemButton>
        </ListItem>

        <div className="mt-24 text-xs text-grey">
          <Typography className="text-xs ml-5">PROFILE</Typography>
          <div className="py-4  px-4 max-w-sm mx-auto bg-black rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-start sm:space-y-0 sm:space-x-6 group ">
            <Avatar
              className="block mx-auto h-9 rounded-full sm:mx-0 bg-black text-black text-center bg-white"
              src=""
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-white font-semibold">
                  Erin Lindford
                </p>
                <p className="text-slate-500 font-medium">Product Engineer</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-gray mb-4">
            <LogoutOutlinedIcon />
            Logout
          </div>
        </div>
      </Drawer>
    </Stack>
  );
}
export default Aside;
