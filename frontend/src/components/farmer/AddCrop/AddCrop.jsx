import "./AddCrop.css";

const AddCrop = () => {
  return (
    <section className="add-crop">

      <h2>Add New Crop</h2>

      <form className="crop-form">

        <input
          type="text"
          placeholder="Crop Name"
        />

        <select>
          <option>Select Category</option>
          <option>Paddy</option>
          <option>Maize</option>
          <option>Cotton</option>
          <option>Wheat</option>
          <option>Turmeric</option>
          <option>Groundnut</option>
        </select>

        <input
          type="number"
          placeholder="Quantity (Kg)"
        />

        <input
          type="number"
          placeholder="Price per Kg"
        />

        <input
          type="date"
        />

        <input
          type="text"
          placeholder="Location"
        />

        <textarea
          rows="5"
          placeholder="Description"
        ></textarea>

        <input
          type="file"
        />

        <button type="submit">
          Add Crop
        </button>

      </form>

    </section>
  );
};

export default AddCrop;