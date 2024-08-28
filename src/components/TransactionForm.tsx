import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Input, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SelectTransaction from "./SelectTransaction";
import LastMonthTransaction from "./LastMonthTransaction";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const TransactionForm = () => {
  return (
    <div className="mt-5">
      <div className=" flex">
        <div>
          <Box sx={{ backgroundColor: "black", width: 7, height: 15 }}></Box>
        </div>
        <div>
          <span className="ml-5 font-bold">Most Sold Items</span>
        </div>
      </div>
      <div className="border">
        <div className="flex flex-row">
          <TextField
            size="small"
            className="w-2/5 m-2 rounded-full"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon className="text-slate-500" />
                </InputAdornment>
              ),
            }}
            label="Search for transaction"
          />
          <SelectTransaction />
          <LastMonthTransaction />
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, width: 1010 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Date</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>ID</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Value</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Status</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Sescription</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TransactionForm;
