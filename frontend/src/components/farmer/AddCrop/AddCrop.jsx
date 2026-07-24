import "./AddCrop.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  addCrop,
  getCropById,
  updateCrop,
} from "../../../services/cropService";

const AddCrop = ({ editMode = false }) => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    cropName: "",
    category: "",
    quantity: "",
    price: "",
    harvestDate: "",
    location: "",
    description: "",
    image: null,
  });

  // ================= Load Crop =================

  useEffect(() => {

    if (!editMode) return;

    const loadCrop = async () => {

      const response = await getCropById(id);

      if (response.success) {

        const crop = response.crop;

        setFormData({
          cropName: crop.cropName,
          category: crop.category,
          quantity: crop.quantity,
          price: crop.price,
          harvestDate: crop.harvestDate?.split("T")[0],
          location: crop.location,
          description: crop.description,
          image: null,
        });

      }

    };

    loadCrop();

  }, [editMode, id]);

  // ================= Handle Change =================

  const handleChange = (e) => {

    const { name, value, files } = e.target;

    if (name === "image") {

      setFormData({
        ...formData,
        image: files[0],
      });

    } else {

      setFormData({
        ...formData,
        [name]: value,
      });

    }

  };

  // ================= Submit =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const data = new FormData();

      data.append("cropName", formData.cropName);
      data.append("category", formData.category);
      data.append("quantity", formData.quantity);
      data.append("price", formData.price);
      data.append("harvestDate", formData.harvestDate);
      data.append("location", formData.location);
      data.append("description", formData.description);

      if (formData.image) {
        data.append("image", formData.image);
      }

      let response;

      if (editMode) {

        response = await updateCrop(id, data);

      } else {

        response = await addCrop(data);

      }

      if (!response.success) {

        alert(response.message);

        return;

      }

      alert(
        editMode
          ? "Crop Updated Successfully"
          : "Crop Added Successfully"
      );

      navigate("/farmer/my-crops");

    } catch (error) {

      console.error(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="add-crop">

      <h2>
        {editMode ? "Edit Crop" : "Add New Crop"}
      </h2>

      <form
        className="crop-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="cropName"
          placeholder="Crop Name"
          value={formData.cropName}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option>Paddy</option>
          <option>Maize</option>
          <option>Cotton</option>
          <option>Wheat</option>
          <option>Turmeric</option>
          <option>Groundnut</option>
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity (Kg)"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price per Kg"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="harvestDate"
          value={formData.harvestDate}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <textarea
          rows="5"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : editMode
            ? "Update Crop"
            : "Add Crop"}
        </button>

      </form>

    </section>

  );

};

export default AddCrop;