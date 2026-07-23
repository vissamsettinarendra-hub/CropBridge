import "./QuickActions.css";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <section className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="action-buttons">

        <Link to="/farmer/add-crop">
          <button>Add Crop</button>
        </Link>

        <Link to="/farmer/orders">
          <button>View Orders</button>
        </Link>

        <Link to="/farmer/payments">
          <button>Check Payments</button>
        </Link>

        <Link to="/farmer/profile">
          <button>Update Profile</button>
        </Link>

      </div>

    </section>
  );
};

export default QuickActions;