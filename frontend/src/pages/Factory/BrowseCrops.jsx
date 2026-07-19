import "./FactoryDashboard.css";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";
import BrowseCrops from "../../components/factory/BrowseCrops/BrowseCrops";

const FactoryBrowseCrops = () => {
  return (
    <div className="factory-dashboard">

      <FactorySidebar />

      <div className="dashboard-content">
        <FactoryHeader />
        <BrowseCrops />
      </div>

    </div>
  );
};

export default FactoryBrowseCrops;