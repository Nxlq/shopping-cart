function CategoryDisplay({ category }) {
  return (
    <div className="category-display">
      <img
        className="circle"
        src={`/category-images/${category}.jpg`}
        alt={`${category} image link`}
      />
      <h3>{category}</h3>
    </div>
  );
}

export default CategoryDisplay;
