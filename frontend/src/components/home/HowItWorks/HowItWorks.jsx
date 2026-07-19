import "./HowItWorks.css";
import {
  FaSeedling,
  FaMobileAlt,
  FaIndustry,
  FaHandshake,
  FaTruck,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSeedling />,
    title: "Farmer Registers",
    description:
      "Farmers create an account and verify their details to join CropBridge.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Upload Crop",
    description:
      "Farmers upload crop details, quantity, quality, and expected price.",
  },
  {
    icon: <FaIndustry />,
    title: "Factories View",
    description:
      "Verified factories browse available crops and send purchase requests.",
  },
  {
    icon: <FaHandshake />,
    title: "Deal Confirmation",
    description:
      "Farmer and factory finalize the quantity, price, and agreement.",
  },
  {
    icon: <FaTruck />,
    title: "Transportation",
    description:
      "Logistics are arranged to safely transport crops to the factory.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Secure Payment",
    description:
      "After successful delivery, payment is transferred securely.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how">

      <div className="how-header">
        <h2>How CropBridge Works</h2>

        <p>
          A simple and transparent process connecting farmers directly with industries.
        </p>
      </div>

      <div className="how-container">

        {steps.map((step, index) => (
          <div className="step-card" key={index}>

            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default HowItWorks;