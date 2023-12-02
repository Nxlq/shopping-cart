import CategoryDisplay from "./CategoryDisplay";
import "/src/styles/FeaturedCategories.css";

function FeaturedCategories({ categories }) {
  console.log({ categories });
  return (
    <div className="featured-categories">
      <h1>Featured Categories</h1>
      <div className="categories">
        {categories.map((category, i) => (
          <CategoryDisplay key={i} category={category} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategories;
