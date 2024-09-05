import DemographicCards from "../../components/DemographicCards";
import DemographicSegmentation from "../../components/DemographicSegmentation";
import TableRate from "../../components/RateTable";
import { Box } from "@mui/material";

const ConversionAndRetention = () => {
  return (
    <div className="ml-5">
      <div className="mt-4 ">
        <h1 className=" font-bold text-xl ml-4">
          Conversion and Retention Overview
        </h1>
        <div className=" flex m-2">
          <Box sx={{ backgroundColor: "black", width: 7, height: 15 }}></Box>
          <span className="ml-5 font-bold">Customers</span>
        </div>
        <div className="flex ">
          <div className=" flex flex-col flex-wrap gap-1 ml-4">
            <div className=" flex gap-6">
              <DemographicCards topText="All" bottomNumber={4600} />
              <DemographicCards topText="New (in 2023)" bottomNumber={2300} />
              <DemographicCards topText="Regular" bottomNumber={1200} />
            </div>
            <div className="border mt-2">
              <div className="ml-4">
                <div className="font-bold mt-4">
                  Demographic Segmentation by Age
                </div>
                <DemographicSegmentation
                  age={"18-25"}
                  percentage={70}
                  amount={20345}
                />
                <DemographicSegmentation
                  age={"26-45"}
                  percentage={40}
                  amount={3425}
                />
                <DemographicSegmentation
                  age={"46-65"}
                  percentage={20}
                  amount={8555}
                />
                <DemographicSegmentation
                  age={"above 65"}
                  percentage={10}
                  amount={8555}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-4 ">
            <div className=" ">
              <TableRate />
            </div>
            <div className=" border mt-2 rounded">
              <div className="font-bold ml-2">
                Demographic Segmentation by Gender
              </div>

              <div className="ml-4">
                <DemographicSegmentation
                  age={"above 65"}
                  percentage={10}
                  amount={8555}
                />
                <DemographicSegmentation
                  age={"above 65"}
                  percentage={10}
                  amount={8555}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second component started here (repeated one) */}
      <div className="mt-4 ">
        <div className=" flex m-2">
          <Box sx={{ backgroundColor: "black", width: 7, height: 15 }}></Box>
          <span className="ml-5 font-bold">Sellers</span>
        </div>
        <div className="flex ">
          <div className=" flex flex-col flex-wrap gap-1 ml-4 ">
            <div className=" flex gap-6">
              <DemographicCards topText="All" bottomNumber={346} />
              <DemographicCards topText="New (in 2023)" bottomNumber={125} />
              <DemographicCards topText="Regular" bottomNumber={3000} />
            </div>
            <div className="border mt-2">
              <div className="ml-4">
                <div className="font-bold mt-4">
                  Demographic Segmentation by Age
                </div>
                <DemographicSegmentation
                  age={"18-25"}
                  percentage={70}
                  amount={20345}
                />
                <DemographicSegmentation
                  age={"26-45"}
                  percentage={40}
                  amount={3425}
                />
                <DemographicSegmentation
                  age={"46-65"}
                  percentage={20}
                  amount={8555}
                />
                <DemographicSegmentation
                  age={"above 65"}
                  percentage={10}
                  amount={8555}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-4 ">
            <div className=" ">
              <TableRate />
            </div>
            <div className=" border mt-2 rounded">
              <div className="font-bold ml-2">
                Demographic Segmentation by Gender
              </div>

              <div className="ml-4">
                <DemographicSegmentation
                  age={"above 65"}
                  percentage={60}
                  amount={8555}
                />
                <DemographicSegmentation
                  age={"above 65"}
                  percentage={30}
                  amount={8555}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionAndRetention;
