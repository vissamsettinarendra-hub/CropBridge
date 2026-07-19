import "./ContactHero.css";
import { contactData } from "../../../data/contact";

const ContactHero = () => {
  return (
    <section className="contact-hero">

      <div className="contact-overlay">

        <span>📞 Contact CropBridge</span>

        <h1>{contactData.hero.title}</h1>

        <p>{contactData.hero.subtitle}</p>

      </div>

    </section>
  );
};

export default ContactHero;