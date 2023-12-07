import { useParams } from "react-router-dom";
import ItemCard from "../componenets/ItemCard";

export default function CategoryPage({ productLog }) {
  const { categoryName } = useParams();

  const categoriesProducts = productLog[categoryName];

  if (!categoriesProducts)
    return <h1>OOOPS ERROR ? @O@ PAGE THAT CATEFORY DOESNTT EXIST</h1>;

  return (
    <div className="category-items__container">
      {categoriesProducts.map((product) => (
        <ItemCard itemInfo={product} key={product.name} />
      ))}
    </div>
  );
}
