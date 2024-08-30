import Aside from "../components/Aside";
import PortifolioValueChart from "../components/PortifolioValueChart";
import SolidItemsChart from "../components/SolidItemsChart";
import SalesPieChart from "../components/SalesPieChart";
import RevenueChart from "../components/RevenueChart";
import InEscrowChart from "../components/InEscrowChart";
import TransactionForm from "../components/TransactionForm";

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
          <SolidItemsChart />
        </div>

        <div className="flex">
          <TransactionForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
