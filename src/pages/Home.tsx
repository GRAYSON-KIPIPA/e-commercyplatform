import Aside from "../components/Aside";
import PortifolioValueChart from "../components/PortifolioValueChart";
import SolidItemsChart from "../components/SoldItemsChart";
import SalesPieChart from "../components/SalesPieChart";
import RevenueChart from "../components/RevenueChart";
import InEscrowChart from "../components/InEscrowChart";
import TransactionForm from "../components/TransactionForm";
import SoldItems from "../components/SoldItemsChart";
import DemographicSegmentation from "../components/DemographicSegmentation";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex ml-10 flex-wrap ">
        <h1 className="font-bold text-xl mb-4">Transaction overview</h1>

        <div className="flex">
          <SalesPieChart />
          <RevenueChart />
          <InEscrowChart />
        </div>
        <div className="flex mt-6">
          <PortifolioValueChart />

          <div>
            <div className=" flex ml-4">
              <Box
                sx={{ backgroundColor: "black", width: 7, height: 15 }}
              ></Box>
              <span className="ml-5 font-bold">Portifolio Value</span>
            </div>
            <div className=" border ml-4 p-2">
              <div className="mt-4">
                <DemographicSegmentation
                  age={"26-45"}
                  percentage={90}
                  amount={3425}
                />
              </div>
              <DemographicSegmentation
                age={"26-45"}
                percentage={70}
                amount={3425}
              />
              <DemographicSegmentation
                age={"26-45"}
                percentage={10}
                amount={3425}
              />
              <DemographicSegmentation
                age={"26-45"}
                percentage={60}
                amount={3425}
              />
              <DemographicSegmentation
                age={"26-45"}
                percentage={100}
                amount={3425}
              />
            </div>
          </div>
          {/* <SolidItemsChart /> */}
        </div>

        <div className="flex">
          <TransactionForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
