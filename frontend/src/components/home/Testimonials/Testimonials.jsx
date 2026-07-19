import "./Testimonials.css";
import { testimonials } from "../../../data/testimonials";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="testimonial-header">

        <span className="testimonial-tag">
          💬 Testimonials
        </span>

        <h2>What Our Users Say</h2>

        <p>
          Farmers and industries trust CropBridge to simplify agricultural trade
          with transparency and better opportunities.
        </p>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item) => (

          <div className="testimonial-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <span>{item.role}</span>

            <div className="stars">
              {[...Array(item.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <p>"{item.review}"</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Testimonials;