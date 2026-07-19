import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">

      <h2>Farmer Profile</h2>

      <div className="profile-card">

        <div className="profile-image">

          <img
            src="https://via.placeholder.com/180"
            alt="Farmer"
          />

        </div>

        <div className="profile-details">

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              defaultValue="Narendra"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              defaultValue="narendra@gmail.com"
            />
          </div>

          <div className="input-group">
            <label>Mobile</label>
            <input
              type="text"
              defaultValue="9876543210"
            />
          </div>

          <div className="input-group">
            <label>Village</label>
            <input
              type="text"
              defaultValue="Koduru"
            />
          </div>

          <div className="input-group">
            <label>District</label>
            <input
              type="text"
              defaultValue="Guntur"
            />
          </div>

          <div className="input-group">
            <label>State</label>
            <input
              type="text"
              defaultValue="Andhra Pradesh"
            />
          </div>

          <div className="input-group">
            <label>Farm Size</label>
            <input
              type="text"
              defaultValue="12 Acres"
            />
          </div>

          <button>
            Update Profile
          </button>

        </div>

      </div>

    </section>
  );
};

export default Profile;