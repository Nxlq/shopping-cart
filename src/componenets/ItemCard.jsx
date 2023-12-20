import { Link } from "react-router-dom";
import "/src/styles/ItemCard.css";
import { formatNameForSEO } from "../helperFunctions";

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
        <h4 className="item-price">${itemInfo.price}</h4>
        <h4 className="item-title">{itemInfo.title}</h4>
      </Link>
      <button
        onClick={() => {
          addToCart(itemInfo);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ItemCard;
