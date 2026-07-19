import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form">

      <div className="form-container">

        <div className="form-content">

          <span>📩 Send Us a Message</span>

          <h2>We'd Love to Hear From You</h2>

          <p>
            Whether you're a farmer, factory owner, or business partner,
            feel free to reach out to us. Our team will respond as soon as possible.
          </p>

        </div>

        <form className="form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactForm;