import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectTransaction() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: 180 }}>
        <InputLabel id="demo-simple-select-label">All transaction</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="All transaction"
          onChange={handleChange}
          size="small"
          className="mt-2 "
        >
          <MenuItem value={10}>All Transactions</MenuItem>
          <MenuItem value={20}>Few Transaction</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
