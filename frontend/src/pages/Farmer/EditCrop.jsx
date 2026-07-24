import "./FarmerDashboard.css";

import FarmerSidebar from "../../components/farmer/FarmerSidebar/FarmerSidebar";
import FarmerHeader from "../../components/farmer/FarmerHeader/FarmerHeader";
import AddCrop from "../../components/farmer/AddCrop/AddCrop";

const EditCrop = () => {
  return (
    <div className="farmer-dashboard">

      <FarmerSidebar />

      <div className="dashboard-content">

        <FarmerHeader />

        <AddCrop editMode={true} />

      </div>

    </div>
  );
};

export default EditCrop;