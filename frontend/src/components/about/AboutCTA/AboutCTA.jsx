import "./AboutCTA.css";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="about-cta">

      <h2>Join India's Smart Agricultural Marketplace</h2>

      <p>
        Connect directly with industries, get fair prices,
        and grow your agricultural business with CropBridge.
      </p>

      <Link to="/register">

        <button>
          Get Started Today
        </button>

      </Link>

    </section>
  );
};

export default AboutCTA;