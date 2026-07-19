import "./Newsletter.css";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <span className="newsletter-tag">
          📧 Newsletter
        </span>

        <h2>Stay Updated with CropBridge</h2>

        <p>
          Subscribe to receive the latest crop prices, agricultural news,
          government schemes, and industry updates directly in your inbox.
        </p>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Subscribe
            <FaPaperPlane />
          </button>

        </form>

      </div>

    </section>
  );
};

export default Newsletter;