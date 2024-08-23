import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Button, TextField } from "@mui/material";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

const drawerWidth = 260;

function Aside() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className="bg-pink-400">
      <Box sx={{ display: "flex" }}>
        <Drawer
          PaperProps={{ sx: { bgcolor: "white", color: "grey.700" } }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          {/* <Toolbar /> */}
          <img src="./src/assets/ShopKonekt.png" width={250} />
          <TextField size="small" className="mt-2 m-2 rounded-lg" />
          <Typography className="ml-9 mt-3 font-light ">MENU</Typography>
          <ListItem className="">
            <ListItemButton>
              <ListItemIcon>
                <div className="flex flex-row">
                  <SpaceDashboardTwoToneIcon />
                  <Accordion
                    expanded={expanded}
                    onChange={handleExpansion}
                    slots={{ transition: Fade as AccordionSlots["transition"] }}
                    //   slotProps={{ transition: { timeout: 400 } }}
                    sx={{
                      backgroundColor: "",
                      "& .MuiAccordion-region": {
                        height: expanded ? "auto" : 0,
                      },
                      "& .MuiAccordionDetails-root": {
                        display: expanded ? "block" : "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      id="panel1-header"
                    >
                      <ListItemText>Overview</ListItemText>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ListItem className="hover:bg-blue-900 hover:rounded-full hover:text-white">
                        <ListItemButton>
                          <ListItemIcon>
                            <ShoppingBagOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText>Products</ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem className="hover:bg-blue-900 hover:rounded-full hover:text-white">
                        <ListItemButton>
                          <ListItemIcon>
                            <ShoppingBagOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText>Products</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem className="hover:bg-blue-900 hover:rounded-full hover:text-white">
            <ListItemButton>
              <ListItemIcon>
                <ShoppingBagOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Products</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem className="hover:bg-blue-900 hover:rounded-full hover:text-white">
            <ListItemButton>
              <ListItemIcon>
                <GroupOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Customers</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem className="hover:bg-blue-900 hover:rounded-full hover:text-white">
            <ListItemButton>
              <ListItemIcon>
                <GroupOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Sellers</ListItemText>
            </ListItemButton>
          </ListItem>
        </Drawer>
      </Box>
    </div>
  );
}
export default Aside;
