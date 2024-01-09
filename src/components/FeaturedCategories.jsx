import CategoryDisplay from "./CategoryDisplay";
import "/src/styles/FeaturedCategories.css";
import "/src/App.css";

function FeaturedCategories({ categories }) {
  console.log({ categories });
  if (!categories) return;
  return (
    <div className="featured-categories">
      <h1>Featured Categories</h1>
      <div className="categories">
        {categories.map((category) => (
          <CategoryDisplay key={category} category={category} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategories;
