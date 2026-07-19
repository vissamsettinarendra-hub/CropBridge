import "./CategoriesCTA.css";
import { Link } from "react-router-dom";

const CategoriesCTA = () => {
  return (
    <section className="categories-cta">

      <h2>Start Trading Your Crops Today</h2>

      <p>
        Register now and connect directly with trusted buyers and industries.
      </p>

      <Link to="/register">
        <button>Get Started</button>
      </Link>

    </section>
  );
};

export default CategoriesCTA;