import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function LastMonthTransaction() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: 180 }} className="ml-3">
        <InputLabel id="demo-simple-select-label">Last 30 days</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Last 30 days"
          onChange={handleChange}
          size="small"
          className="mt-2 "
        >
          <MenuItem value={10}>Last 30 days</MenuItem>
          <MenuItem value={20}>Last two months</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
