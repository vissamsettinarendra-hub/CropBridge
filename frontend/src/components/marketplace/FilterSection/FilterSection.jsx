import "./FilterSection.css";

const FilterSection = () => {
  return (
    <section className="filter-section">

      <input
        type="text"
        placeholder="Search crops..."
      />

      <select>
        <option>All Categories</option>
        <option>Grains</option>
        <option>Vegetables</option>
        <option>Fruits</option>
        <option>Spices</option>
      </select>

      <button>Search</button>

    </section>
  );
};

export default FilterSection;