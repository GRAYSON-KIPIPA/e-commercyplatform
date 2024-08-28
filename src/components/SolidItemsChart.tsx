import { BarChart } from "@mui/x-charts/BarChart";
import { solditemsdataset } from "../store/soliditemdataset";
import Box from "@mui/material/Box";
const chartSetting = {
  xAxis: [
    {
      label: "rainfall (mm)",
      barGapRation: 0.3,
    },
  ],
  width: 400,
  height: 200,
};

const valueFormatter = (value: number | null) => `${value}mm`;

export default function SolidItemsChart() {
  return (
    <div className="ml-2  ">
      <div className=" flex">
        <div>
          <Box sx={{ backgroundColor: "black", width: 7, height: 15 }}></Box>
        </div>
        <div>
          <span className="ml-5 font-bold">Most Sold Items</span>
        </div>
      </div>
      <div className="border ">
        <BarChart
          dataset={solditemsdataset}
          yAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            { dataKey: "seoul", label: "Seoul rainfall", valueFormatter },
          ]}
          layout="horizontal"
          {...chartSetting}
          colors={["#3f51b5"]}
          borderRadius={10}
        />
      </div>
    </div>
  );
}
