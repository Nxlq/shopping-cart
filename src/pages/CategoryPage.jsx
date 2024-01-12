import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import "/src/styles/CategoryPage.css";
import { formatCategoryHeader } from "../helperFunctions";
import { useEffect } from "react";

export default function CategoryPage({ productLog, addToCart, isLoading }) {
  const { categoryName } = useParams();
  const categoriesProducts = productLog[categoryName];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  if (isLoading) return <h1>Loading...</h1>;

  const formattedName = formatCategoryHeader(categoryName);

  return (
    <div className="category-page">
      <h1>{formattedName}</h1>
      <div className="category-items__container">
        {categoriesProducts.map((product) => (
          <ItemCard itemInfo={product} key={product.id} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
