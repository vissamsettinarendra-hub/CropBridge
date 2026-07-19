import "./ContactMap.css";

const ContactMap = () => {
  return (
    <section className="contact-map">

      <h2>Our Location</h2>

      <iframe
        title="CropBridge Location"
        src="https://www.google.com/maps?q=Guntur,Andhra%20Pradesh&output=embed"
        loading="lazy"
      ></iframe>

    </section>
  );
};

export default ContactMap;