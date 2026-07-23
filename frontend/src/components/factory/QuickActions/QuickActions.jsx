import "./QuickActions.css";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <section className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="action-buttons">

        <Link to="/factory/browse-crops">
          <button>Browse Crops</button>
        </Link>

        <Link to="/factory/crop-request">
          <button>Create Request</button>
        </Link>

        <Link to="/factory/orders">
          <button>View Orders</button>
        </Link>

        <Link to="/factory/profile">
          <button>Profile</button>
        </Link>

      </div>

    </section>
  );
};

export default QuickActions;