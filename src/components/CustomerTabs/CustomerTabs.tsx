import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PurchasesTab from "./PurchasesTab";
import CustomerCommentsTab from "./CustomerComments";
import SecurityTab from "./SecurityTab";

export default function CustomerTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Purchases" value="1" />
            <Tab label="Comments" value="2" />
            <Tab label="Security" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <PurchasesTab />
        </TabPanel>
        <TabPanel value="2">
          <CustomerCommentsTab />
        </TabPanel>
        <TabPanel value="3">
          <SecurityTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
