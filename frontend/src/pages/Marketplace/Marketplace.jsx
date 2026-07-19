import MarketplaceHero from "../../components/marketplace/MarketplaceHero/MarketplaceHero";
import FilterSection from "../../components/marketplace/FilterSection/FilterSection";
import CropList from "../../components/marketplace/CropList/CropList";
import BuyerSection from "../../components/marketplace/BuyerSection/BuyerSection";
import MarketplaceCTA from "../../components/marketplace/MarketplaceCTA/MarketplaceCTA";

const Marketplace = () => {
  return (
    <>
      <MarketplaceHero />
      <FilterSection />
      <CropList />
      <BuyerSection />
      <MarketplaceCTA />
    </>
  );
};

export default Marketplace;