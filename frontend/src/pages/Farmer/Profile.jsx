import "./FarmerDashboard.css";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";
import Profile from "../../components/farmer/Profile/Profile";

const FarmerProfile = () => {
  return (
    <div className="farmer-dashboard">

      <FarmerSidebar />

      <div className="dashboard-content">
        <FarmerHeader />
        <Profile />
      </div>

    </div>
  );
};

export default FarmerProfile;