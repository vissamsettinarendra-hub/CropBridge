import "./CategoryGrid.css";
import { categories } from "../../../data/categories";

const CategoryGrid = () => {
  return (
    <section className="category-grid-section">

      <h2>Available Categories</h2>

      <div className="category-grid">

        {categories.map((category) => (

          <div className="category-card" key={category.id}>

            <img
              src={category.image}
              alt={category.name}
            />

            <h3>{category.name}</h3>

            <p>{category.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default CategoryGrid;