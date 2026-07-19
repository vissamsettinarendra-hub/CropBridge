import AboutHero from "../../components/about/AboutHero/AboutHero";
import Story from "../../components/about/Story/Story";
import MissionVision from "../../components/about/MissionVision/MissionVision";
import Values from "../../components/about/Values/Values";
import Team from "../../components/about/Team/Team";
import AboutCTA from "../../components/about/AboutCTA/AboutCTA";

const About = () => {
  return (
    <>
      <AboutHero />
      <Story />
      <MissionVision />
      <Values />
      <Team />
      <AboutCTA />
    </>
  );
};

export default About;