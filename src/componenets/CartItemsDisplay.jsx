import CartItem from "./CartItem";
import "/src/styles/CartItemsDisplay.css";

function CartItemsDisplay({ cartItems, itemCount }) {
  return (
    <div className="cart-items-display">
      <div className="header__wrapper">
        <img src="/store-svgrepo-com.svg" />
        <div className="header__container">
          <h2>Order Pickup</h2>
          <span>
            {itemCount} {`${itemCount === 1 ? "item" : "items"}`} at Brooklyn
            Bensonhurst
          </span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CartItem key={item.id} itemInfo={item} />
      ))}
    </div>
  );
}

export default CartItemsDisplay;
