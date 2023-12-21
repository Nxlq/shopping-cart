import CartItem from "./CartItem";

function CartItemsDisplay({ cartItems, itemCount }) {
  return (
    <div className="cart-items-display">
      <div className="header-container">
        <h2>Order Pickup</h2>
        <span>
          {itemCount} {`${itemCount === 1 ? "item" : "items"}`} at Brooklyn
          Bensonhurst
        </span>
      </div>
      {cartItems.map((item) => (
        <CartItem key={item.id} itemInfo={item} />
      ))}
    </div>
  );
}

export default CartItemsDisplay;
