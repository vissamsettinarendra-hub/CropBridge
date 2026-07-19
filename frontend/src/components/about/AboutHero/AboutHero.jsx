import "./AboutHero.css";
import { aboutData } from "../../../data/about";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <span className="about-hero-tag">
          🌱 Welcome to CropBridge
        </span>

        <h1>{aboutData.hero.title}</h1>

        <p>{aboutData.hero.subtitle}</p>

        <button className="about-btn">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutHero;