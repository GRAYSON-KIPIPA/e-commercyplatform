import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(year: number, customers: number, revenue: number) {
  return { year, customers, revenue };
}

const rows = [
  createData(2024, 4159, 124564),
  createData(2023, 6237, 345678),
  createData(2022, 9262, 456783),
];

export default function TableRate() {
  return (
    <div className="">
      <TableContainer className="p-2" component={Paper}>
        <div className="font-bold">Conversion Rate</div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">YEAR</TableCell>
              <TableCell align="left">CUSTOMERS</TableCell>
              <TableCell align="left">REVENUE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.year}
                sx={{
                  "& .MuiTableCell-root": {
                    height: "30px",
                    padding: "0",
                  },
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell className="font-bold">{row.year}</TableCell>
                <TableCell className="font-bold" align="left">
                  {row.customers}
                </TableCell>
                <TableCell className="font-bold" align="left">
                  {"TZS "}
                  {row.revenue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
