import { Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function InEscrowChart() {
  return (
    <div>
      <div className="flex flex-row ">
        <div>
          <Typography className="text-sm">In Escrow</Typography>
          <Typography className="text-lg font-bold">18.2K</Typography>
          <Typography className="text-sm">Available to payout</Typography>
        </div>
        <div className="flex ml-10">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 45, color: "#ff9800" },
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
