import { colors } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import DemographicSegmentation from "../DemographicSegmentation";
export default function SaleActiviry() {
  return (
    <div>
      <div className=" flex">
        <Box sx={{ backgroundColor: "black", width: 7, height: 15 }}></Box>
        <span className="ml-5 font-bold">Revenue</span>
      </div>
      <div className="flex row">
        <div className="col">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [20000, 55000, 20000, 850000, 150000, 50000],
                color: "#1976d2",
              },
            ]}
            width={500}
            height={300}
          />
        </div>
        <div className="col">
          <div className="text-sm font-bold">Total Profit</div>
          <div className="text-lg font-bold text-violet-500">
            TZS 600,569.44
          </div>
          <div className=" flex mt-2">
            <Box sx={{ backgroundColor: "black", width: 7, height: 15 }}></Box>
            <span className="ml-5 font-bold">Profit by Category</span>
          </div>
          <DemographicSegmentation age="25-45" percentage={80} amount={45000} />
        </div>
      </div>
    </div>
  );
}
// ["Jan", "Feb", "March", "Apri", "May", "Jun", "July", "Aug"];
