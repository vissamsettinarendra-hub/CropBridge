import "./Story.css";
import { aboutData } from "../../../data/about";

const Story = () => {
  return (
    <section className="story">

      <div className="story-container">

        <div className="story-image">
          <img
            src={aboutData.story.image}
            alt="Our Story"
          />
        </div>

        <div className="story-content">

          <span className="story-tag">
            🌾 Our Story
          </span>

          <h2>{aboutData.story.title}</h2>

          <p>{aboutData.story.description}</p>

          <button>
            Read More
          </button>

        </div>

      </div>

    </section>
  );
};

export default Story;