import ricemill from "../assets/industries/rice-mill.jpg";
import textile from "../assets/industries/textile.jpg";
import spice from "../assets/industries/spices.jpg";
import oilindustry from "../assets/industries/oil-industry.jpg";
import foodprocessing from "../assets/industries/food-processing.jpg";
import feedindustry from "../assets/industries/feed-industry.jpg";

export const industries = [
  {
    id: 1,
    name: "Rice Mills",
    image: ricemill,
    crops: ["Paddy", "Broken Rice"],
    buyers: "250+ Active Buyers",
    description:
      "Rice mills purchase paddy directly from farmers for processing and packaging.",
  },
  {
    id: 2,
    name: "Textile Industry",
    image: textile,
    crops: ["Cotton"],
    buyers: "180+ Active Buyers",
    description:
      "Textile industries source quality cotton directly for fabric manufacturing.",
  },
  {
    id: 3,
    name: "Spice Processing",
    image: spice,
    crops: ["Chilli", "Turmeric"],
    buyers: "120+ Active Buyers",
    description:
      "Spice processing industries buy fresh spices for domestic and export markets.",
  },
  {
    id: 4,
    name: "Oil Extraction",
    image: oilindustry,
    crops: ["Groundnut", "Sunflower"],
    buyers: "150+ Active Buyers",
    description:
      "Oil industries purchase oilseed crops for edible oil production.",
  },
  {
    id: 5,
    name: "Food Processing",
    image: foodprocessing,
    crops: ["Potato", "Onion", "Tomato"],
    buyers: "210+ Active Buyers",
    description:
      "Food processing companies buy fresh vegetables for packaged food products.",
  },
  {
    id: 6,
    name: "Animal Feed Industry",
    image: feedindustry,
    crops: ["Maize", "Soybean"],
    buyers: "95+ Active Buyers",
    description:
      "Feed manufacturers procure grains for poultry and livestock nutrition.",
  },
];