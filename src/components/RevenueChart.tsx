import { Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function RevenueChart() {
  return (
    <div>
      <div className="flex  ">
        <div>
          <Typography className="text-sm">Today's Revenue</Typography>
          <Typography className="text-lg font-bold">8.2K</Typography>
          <Typography className="text-sm">Available to payout</Typography>
        </div>
        <div className="flex ml-10">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 45, color: "#76ff03" },
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
