import "./MissionVision.css";
import { aboutData } from "../../../data/about";

const MissionVision = () => {
  return (
    <section className="mission-vision">

      <div className="mv-container">

        {/* Mission */}

        <div className="mv-card">

          <img
            src={aboutData.mission.image}
            alt="Mission"
          />

          <h2>{aboutData.mission.title}</h2>

          <p>{aboutData.mission.description}</p>

        </div>

        {/* Vision */}

        <div className="mv-card">

          <img
            src={aboutData.vision.image}
            alt="Vision"
          />

          <h2>{aboutData.vision.title}</h2>

          <p>{aboutData.vision.description}</p>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;