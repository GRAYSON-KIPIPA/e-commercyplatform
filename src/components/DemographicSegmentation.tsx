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

type Props = {
  age: string;
  percentage: number;
  amount: number;
};

function DemographicSegmentation({ age, percentage, amount }: Props) {
  return (
    <div>
      <div className=" w-96 mt-2  rounded ">
        <div className="mb-4">
          <Box sx={{ width: 300 }}>
            <div className="flex justify-between text-xs">
              <div className="text-violet-500">
                Age {age}{" "}
                <span className="font-bold">
                  ({percentage}
                  {"%"})
                </span>
              </div>
              <div className="font-bold">{amount}</div>
            </div>
            <BorderLinearProgress variant="determinate" value={percentage} />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default DemographicSegmentation;
