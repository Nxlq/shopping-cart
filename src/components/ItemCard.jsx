import { Link } from "react-router-dom";
import "/src/styles/ItemCard.css";
import { formatNameForSEO } from "../helperFunctions";
import AddToCardBtn from "./AddToCartBtn";

function ItemCard({ itemInfo, addToCart }) {
  // we format the item name's path to optimize it for googles SEO, replaces the default encoded %20 from spaces to a hyphen
  const formattedPathTitle = formatNameForSEO(itemInfo.title);

  return (
    <div className="item-card">
      <Link
        to={`/product/${itemInfo.id}/${formattedPathTitle}`}
        className="item-card-link"
      >
        <img className="" src={itemInfo.image} alt="" />
        <h4 className="item-price">${itemInfo.price.toFixed(2)}</h4>
        <h4 className="item-title">{itemInfo.title}</h4>
      </Link>
      <AddToCardBtn addToCart={addToCart} productInfo={itemInfo} />
    </div>
  );
}

export default ItemCard;
