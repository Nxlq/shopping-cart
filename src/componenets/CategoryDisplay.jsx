import { Link } from "react-router-dom";
import { formatCategoryHeader } from "../helperFunctions";

function CategoryDisplay({ category }) {
  const formattedHeader = formatCategoryHeader(category);

  return (
    <Link to={`category/${category}`}>
      <div className="category-display">
        <img
          className="circle"
          src={`/category-images/${category}.jpg`}
          alt={`${category} image link`}
        />
        <h3>{formattedHeader}</h3>
      </div>
    </Link>
  );
}

export default CategoryDisplay;
