import "./MarketPrices.css";
import { marketPrices } from "../../../data/marketPrices";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const MarketPrices = () => {
  return (
    <section className="market-prices">

      <div className="market-header">

        <span className="market-tag">
          📈 Live Market Prices
        </span>

        <h2>Today's Crop Market Prices</h2>

        <p>
          Stay updated with the latest crop prices across major agricultural
          markets in India. Track price trends and make better selling
          decisions.
        </p>

      </div>

      <div className="market-grid">

        {marketPrices.map((item) => (

          <div className="market-card" key={item.id}>

            <h3>{item.crop}</h3>

            <h2>{item.price}</h2>

            <div
              className={`trend ${
                item.trend === "up" ? "up" : "down"
              }`}
            >
              {item.trend === "up" ? (
                <FaArrowUp />
              ) : (
                <FaArrowDown />
              )}

              <span>{item.change}</span>

            </div>

          </div>

        ))}

      </div>

      <div className="market-btn-box">

        <button className="market-btn">
          View Complete Market
        </button>

      </div>

    </section>
  );
};

export default MarketPrices;