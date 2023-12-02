import "/src/styles/FeaturedCategories.css";

function FeaturedCategories({ categories }) {
  return (
    <div className="featured-categories">
      <h1>Featured Categories</h1>
      <div className="categories">
        {categories.map((category, i) => (
          <h3 key={i}>{category}</h3>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategories;
