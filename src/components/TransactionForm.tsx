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
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function createData(
  date: string,
  id: number,
  value: string,
  status: string,
  description: string
) {
  return { date, id, value, status, description };
}

const rows = [
  createData(
    "Frozen yoghurt",
    159,
    "Tsh 120,000",
    "available",
    "Some short description"
  ),
  createData(
    "Ice cream sandwich",
    237,
    "Tsh 120,000",
    "available",
    "Some short description"
  ),
  createData(
    "Eclair",
    262,
    "Tsh 120,000",
    "available",
    "Some short description"
  ),
];

const TransactionForm = () => {
  return (
    <div className="mt-2">
      <div className=" flex">
        <div>
          <Box sx={{ backgroundColor: "black", width: 7, height: 15 }}></Box>
        </div>
        <div>
          <span className="ml-5 font-bold">Transactions</span>
        </div>
      </div>
      <div className="border">
        <div className="flex flex-row">
          <TextField
            sx={{ width: 590 }}
            size="small"
            className=" m-2 rounded-full"
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
                <TableCell className="font-bold">Date</TableCell>
                <TableCell className="font-bold" align="left">
                  ID
                </TableCell>
                <TableCell className="font-bold" align="left">
                  Value
                </TableCell>
                <TableCell className="font-bold" align="left">
                  Status
                </TableCell>
                <TableCell className="font-bold" align="left">
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  className="hover:bg-gray-100"
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">
                    <ArrowCircleUpIcon
                      className="text-md"
                      style={{ color: "#d32f2f" }}
                    />
                    {row.value}
                  </TableCell>
                  <TableCell
                    align="left"
                    className="hover:bg-black hover:text-white hover:rounded-full"
                  >
                    {row.status}
                  </TableCell>
                  <TableCell className="font-bold" align="left">
                    {row.description}
                  </TableCell>
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
