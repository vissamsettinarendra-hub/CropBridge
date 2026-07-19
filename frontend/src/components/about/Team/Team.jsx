import "./Team.css";
import { aboutData } from "../../../data/about";

const Team = () => {
  return (
    <section className="team">

      <div className="team-container">

        <div className="team-content">

          <span>👨‍🌾 Our Team</span>

          <h2>{aboutData.team.title}</h2>

          <p>{aboutData.team.description}</p>

          <div className="team-stats">

            <div>
              <h3>1000+</h3>
              <p>Farmers</p>
            </div>

            <div>
              <h3>300+</h3>
              <p>Industries</p>
            </div>

            <div>
              <h3>15+</h3>
              <p>States</p>
            </div>

          </div>

        </div>

        <div className="team-image">

          <img
            src={aboutData.team.image}
            alt="CropBridge Team"
          />

        </div>

      </div>

    </section>
  );
};

export default Team;