import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { portifoliodataset } from "../store/portifoliodataset";
import NorthIcon from "@mui/icons-material/North";
import Box from "@mui/material/Box";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 600,
  height: 170,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const valueFormatter = (value: number | null) => `${value}mm`;

export default function PortifolioValueChart() {
  return (
    <div className="">
      <div className=" flex">
        <Box sx={{ backgroundColor: "black", width: 7, height: 15 }}></Box>
        <span className="ml-5 font-bold">Portifolio Value</span>
      </div>
      <div className="border">
        <div className="font-bold text-lg flex">
          $50.4K{" "}
          <span className="ml-4">
            <NorthIcon className="text-sm" />
            <span className="text-lime-500 font-normal text-xs">
              5% than last month
            </span>
          </span>
        </div>
        <BarChart
          dataset={portifoliodataset}
          xAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            { dataKey: "profit", label: "Profit", valueFormatter },
            { dataKey: "loss", label: "Loss", valueFormatter },
          ]}
          {...chartSetting}
          colors={["#3f51b5", "lightgrey"]}
          borderRadius={5}
          margin={{ left: 60 }}
        />
      </div>
    </div>
  );
}
