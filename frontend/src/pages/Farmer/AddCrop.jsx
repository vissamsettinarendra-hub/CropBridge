import "./FarmerDashboard.css";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";
import AddCrop from "../../components/farmer/AddCrop/AddCrop";

const FarmerAddCrop = () => {
  return (
    <div className="farmer-dashboard">

      <FarmerSidebar />

      <div className="dashboard-content">
        <FarmerHeader />
        <AddCrop />
      </div>

    </div>
  );
};

export default FarmerAddCrop;