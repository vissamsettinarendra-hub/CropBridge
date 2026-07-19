import "./CropRequest.css";

const CropRequest = () => {
  return (
    <section className="crop-request">

      <h2>Create Crop Request</h2>

      <form className="request-form">

        <div className="form-group">
          <label>Crop Name</label>
          <input type="text" placeholder="Enter Crop Name" />
        </div>

        <div className="form-group">
          <label>Required Quantity (Kg)</label>
          <input type="number" placeholder="Enter Quantity" />
        </div>

        <div className="form-group">
          <label>Expected Price (₹/Kg)</label>
          <input type="number" placeholder="Enter Price" />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input type="text" placeholder="Enter Location" />
        </div>

        <div className="form-group full-width">
          <label>Description</label>

          <textarea
            rows="5"
            placeholder="Write your crop requirement..."
          ></textarea>

        </div>

        <button type="submit">
          Publish Request
        </button>

      </form>

    </section>
  );
};

export default CropRequest;