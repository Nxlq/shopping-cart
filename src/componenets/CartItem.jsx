import "/src/styles/CartItem.css";
import QuantityDropdownBtn from "./QuantityDropdownBtn";

function CartItem({ itemInfo }) {
  return (
    <div className="cart-item">
      <img src={itemInfo.image} alt="" />
      <div className="info-container">
        <span>{itemInfo.title}</span>
        <div className="btns__container">
          <QuantityDropdownBtn quantity={itemInfo.quantity} />
          <button>Save for later</button>
        </div>
      </div>
      <div className="price__container">
        <span>${(itemInfo.price * itemInfo.quantity).toFixed(2)}</span>
        {itemInfo.quantity > 1 && (
          <span>each ${itemInfo.price.toFixed(2)}</span>
        )}
      </div>
      <button className="remove-btn">Remove</button>
    </div>
  );
}

export default CartItem;
