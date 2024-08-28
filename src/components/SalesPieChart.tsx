import { Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function SalesPieChart() {
  return (
    <div>
      <div className="flex flex-row ">
        <div>
          <Typography className="text-sm">Today's Sales</Typography>
          <Typography className="text-lg font-bold">20.4K</Typography>
          <Typography className="text-sm">We have sold 123 items</Typography>
        </div>
        <div className="flex ml-10">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 45, color: "#3f51b5" },
                  { id: 1, value: 15, color: "lightgray" },
                ],
                innerRadius: 10,
                outerRadius: 25,
              },
            ]}
            width={150}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
