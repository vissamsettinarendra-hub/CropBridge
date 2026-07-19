import "./Hero.css";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import heroFarmer from "../../../assets/images/hero-farmer.png";

const Hero = () => {
  return (
    <section className="hero">

      {/* Left Content */}
      <div className="hero-left">

        <span className="hero-tag">
          🌱 India's Smart Agricultural Supply Chain
        </span>

        <h1>
          Connecting <span>Farmers</span>
          <br />
          Directly with <span>Industries</span>
        </h1>

        <p>
          CropBridge is a digital agricultural platform connecting farmers
          directly with factories and industrial buyers across India.
          Sell crops with transparency, fair pricing, and without unnecessary
          middlemen.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            <FaPlayCircle />
            Learn More
          </button>

        </div>

        {/* Statistics */}

        <div className="hero-stats">

          <div>
            <h3>5000+</h3>
            <p>Farmers</p>
          </div>

          <div>
            <h3>250+</h3>
            <p>Factories</p>
          </div>

          <div>
            <h3>28+</h3>
            <p>States</p>
          </div>

        </div>

      </div>

      {/* Right Image */}

      <div className="hero-right">

        <div className="image-card">

          <img
            src={heroFarmer}
            alt="Indian Farmer"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;