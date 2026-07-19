import "./Stats.css";
import {
  FaUsers,
  FaIndustry,
  FaLeaf,
  FaRupeeSign,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "10,000+",
    title: "Registered Farmers",
  },
  {
    icon: <FaIndustry />,
    number: "500+",
    title: "Verified Factories",
  },
  {
    icon: <FaLeaf />,
    number: "100+",
    title: "Crop Categories",
  },
  {
    icon: <FaRupeeSign />,
    number: "₹50 Cr+",
    title: "Trade Value",
  },
];

const Stats = () => {
  return (
    <section className="stats">

      <div className="stats-header">
        <h2>CropBridge Impact</h2>

        <p>
          Empowering agriculture by connecting farmers directly with industries.
        </p>
      </div>

      <div className="stats-container">

        {stats.map((item, index) => (
          <div className="stat-card" key={index}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h3>{item.number}</h3>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Stats;