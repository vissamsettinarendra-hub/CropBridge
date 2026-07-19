import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import "./Categories.css";

const categories = [
  "Paddy",
  "Cotton",
  "Maize",
  "Groundnut",
  "Turmeric",
  "Chilli",
  "Tomato",
  "Onion",
];

const Categories = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />
    <div className="categories">

      <h2>Crop Categories</h2>

      <div className="category-grid">

        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <h3>{category}</h3>
          </div>
        ))}

      </div>

    </div>
    </div>
  );
};

export default Categories;