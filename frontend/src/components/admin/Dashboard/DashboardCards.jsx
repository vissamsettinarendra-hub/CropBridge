import "./DashboardCards.css";
import {
  FaUsers,
  FaIndustry,
  FaSeedling,
  FaShoppingCart,
} from "react-icons/fa";

const DashboardCards = () => {
  return (
    <section className="dashboard-cards">

      <div className="card">
        <FaUsers className="card-icon" />
        <h3>Total Farmers</h3>
        <h2>1,250</h2>
      </div>

      <div className="card">
        <FaIndustry className="card-icon" />
        <h3>Total Factories</h3>
        <h2>320</h2>
      </div>

      <div className="card">
        <FaSeedling className="card-icon" />
        <h3>Crop Categories</h3>
        <h2>42</h2>
      </div>

      <div className="card">
        <FaShoppingCart className="card-icon" />
        <h3>Total Orders</h3>
        <h2>5,876</h2>
      </div>

    </section>
  );
};

export default DashboardCards;