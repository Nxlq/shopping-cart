import { Link } from "react-router-dom";
import "/src/styles/ItemCard.css";

function ItemCard({ itemInfo }) {
  return (
    <div className="item-card">
      <Link to="/product/itemId" className="item-card-link">
        <img className="" src={itemInfo.image} alt="" />
        <h4 className="item-price">${itemInfo.price}</h4>
        <h4 className="item-title">{itemInfo.title}</h4>
      </Link>
      <button onClick={() => console.log("lk")}>Add to cart</button>
    </div>
  );
}

export default ItemCard;
