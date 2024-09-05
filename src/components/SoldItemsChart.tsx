import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { linearProgressClasses } from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

export default function SoldItems() {
  return (
    <div>
      <div className="flex gap-6">
        <div className="border w-28 h-15 rounded p-2">
          <div className="ml-1 text-xs ">All</div>
          <div className="ml-1 text-lg font-bold">20,345</div>
        </div>{" "}
        <div className="border w-28 h-15 rounded p-2">
          <div className="ml-1 text-xs ">
            New <span className="text-violet-500">(in 2023)</span>
          </div>
          <div className="ml-1 text-lg font-bold">20,345</div>
        </div>{" "}
        <div className="border w-28 h-15 rounded p-2">
          <div className="ml-1 text-xs ">All</div>
          <div className="ml-1 text-lg font-bold">20,345</div>
        </div>
      </div>
      <div className="border w-96 mt-2  rounded p-4">
        <div className="font-bold mb-2">Segmentation by Age</div>
        <div className="mb-4">
          <Box sx={{ width: 300 }}>
            <div className="flex justify-between text-xs">
              <div className="text-violet-500">Age 18-25 (70%)</div>
              <div className="font-bold">85,555</div>
            </div>
            <BorderLinearProgress variant="determinate" value={70} />
          </Box>
        </div>
        <div className="mb-4">
          <Box sx={{ width: 300 }}>
            <div className="flex justify-between text-xs">
              <div className="text-violet-500">Age 26-45 (40%)</div>
              <div className="font-bold">35,555</div>
            </div>
            <BorderLinearProgress variant="determinate" value={40} />
          </Box>
        </div>
        <div className="mb-4">
          <Box sx={{ width: 300 }}>
            <div className="flex justify-between text-xs">
              <div className="text-violet-500">Age 46-65 (16%)</div>
              <div className="font-bold">85,555</div>
            </div>
            <BorderLinearProgress variant="determinate" value={16} />
          </Box>
        </div>
        <div className="mb-4">
          <Box sx={{ width: 300 }}>
            <div className="flex justify-between text-xs">
              <div className="text-violet-500">Age 18-25 (10%)</div>
              <div className="font-bold">555</div>
            </div>
            <BorderLinearProgress variant="determinate" value={10} />
          </Box>
        </div>
      </div>
    </div>
  );
}
