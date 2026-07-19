import "./Features.css";
import {
  FaHandshake,
  FaIndustry,
  FaRupeeSign,
  FaTruck,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

const featureData = [
  {
    icon: <FaHandshake />,
    title: "Fair Pricing",
    description:
      "Farmers receive fair prices by selling directly to verified industries.",
  },
  {
    icon: <FaIndustry />,
    title: "Direct Factory Connection",
    description:
      "Connect directly with factories without unnecessary middlemen.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Secure Payments",
    description:
      "Fast, transparent, and secure digital payment system.",
  },
  {
    icon: <FaTruck />,
    title: "Easy Logistics",
    description:
      "Integrated transportation support for smooth delivery.",
  },
  {
    icon: <FaChartLine />,
    title: "Market Insights",
    description:
      "View live market prices and crop demand trends.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Dedicated support for farmers and industries anytime.",
  },
];

const Features = () => {
  return (
    <section className="features">

      <div className="section-title">

        <h2>Why Choose CropBridge?</h2>

        <p>
          Building trust between farmers and industries through technology.
        </p>

      </div>

      <div className="feature-grid">

        {featureData.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Features;