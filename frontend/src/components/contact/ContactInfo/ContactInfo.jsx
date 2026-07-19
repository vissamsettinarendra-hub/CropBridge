import "./ContactInfo.css";
import { contactData } from "../../../data/contact";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info">

      <h2>Contact Information</h2>

      <div className="info-container">

        <div className="info-card">
          <FaPhoneAlt />
          <h3>Phone</h3>
          <p>{contactData.info.phone}</p>
        </div>

        <div className="info-card">
          <FaEnvelope />
          <h3>Email</h3>
          <p>{contactData.info.email}</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <h3>Address</h3>
          <p>{contactData.info.address}</p>
        </div>

        <div className="info-card">
          <FaClock />
          <h3>Working Hours</h3>
          <p>{contactData.info.workingHours}</p>
        </div>

      </div>

    </section>
  );
};

export default ContactInfo;