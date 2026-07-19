import "./ContactCTA.css";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="contact-cta">

      <h2>Ready to Join CropBridge?</h2>

      <p>
        Start your journey today and connect directly with trusted farmers
        and industries across India.
      </p>

      <Link to="/register">
        <button>Register Now</button>
      </Link>

    </section>
  );
};

export default ContactCTA;