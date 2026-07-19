import Hero from "../../components/home/Hero/Hero";
import Features from "../../components/home/Features/Features";
import Categories from "../../components/home/Categories/Categories";
import HowItWorks from "../../components/home/HowItWorks/HowItWorks";
import Stats from "../../components/home/Stats/Stats";
import Marketplace from "../../components/home/Marketplace/Marketplace";
import FeaturedIndustries from "../../components/home/FeaturedIndustries/FeaturedIndustries";
import TrustedPartners from "../../components/home/TrustedPartners/TrustedPartners";
import MarketPrices from "../../components/home/MarketPrices/MarketPrices";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import FAQ from "../../components/home/FAQ/FAQ";
import CTA from "../../components/home/CTA/CTA";
import Newsletter from "../../components/home/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <HowItWorks />
      <Stats />
      <Marketplace />
      <FeaturedIndustries />
      <TrustedPartners />
      <MarketPrices />
      <Testimonials />
      <FAQ />
      <CTA />
      <Newsletter />
    </>
  );
};

export default Home;