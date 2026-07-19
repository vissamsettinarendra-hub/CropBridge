import "./FactoryDashboard.css";

import FactorySidebar from "../../components/factory/FactorySidebar/FactorySidebar";
import FactoryHeader from "../../components/factory/FactoryHeader/FactoryHeader";
import Profile from "../../components/factory/Profile/Profile";

const FactoryProfile = () => {
  return (
    <div className="factory-dashboard">

      <FactorySidebar />

      <div className="dashboard-content">
        <FactoryHeader />
        <Profile />
      </div>

    </div>
  );
};

export default FactoryProfile;