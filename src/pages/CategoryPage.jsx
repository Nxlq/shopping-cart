import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import "/src/styles/CategoryPage.css";
import { formatCategoryHeader } from "../helperFunctions";

export default function CategoryPage({ productLog, addToCart }) {
  const { categoryName } = useParams();
  const categoriesProducts = productLog[categoryName];

  if (!categoriesProducts)
    return <h1>OOOPS ERROR ? @O@ PAGE THAT CATEFORY DOESNTT EXIST</h1>;

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
