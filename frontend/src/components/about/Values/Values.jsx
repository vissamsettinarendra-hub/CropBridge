import "./Values.css";
import {
  FaHandshake,
  FaLeaf,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

const Values = () => {
  return (
    <section className="values">

      <h2>Our Core Values</h2>

      <div className="values-container">

        <div className="value-card">
          <FaHandshake />
          <h3>Trust</h3>
          <p>Building transparent relationships between farmers and industries.</p>
        </div>

        <div className="value-card">
          <FaLeaf />
          <h3>Sustainability</h3>
          <p>Supporting environmentally friendly agricultural practices.</p>
        </div>

        <div className="value-card">
          <FaShieldAlt />
          <h3>Security</h3>
          <p>Ensuring secure payments and reliable transactions.</p>
        </div>

        <div className="value-card">
          <FaLightbulb />
          <h3>Innovation</h3>
          <p>Using technology to modernize agricultural trade.</p>
        </div>

      </div>

    </section>
  );
};

export default Values;