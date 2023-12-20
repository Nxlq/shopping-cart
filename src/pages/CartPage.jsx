import "/src/styles/CartPage.css";

function CartPage({ cartItems }) {
  const cartSubTotal = cartItems.reduce((sum, cur) => cur.price + sum, 0);
  console.log(cartSubTotal);
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="cart-header">
          <h1>Cart</h1>
          <span>${cartSubTotal}</span>
        </div>
      ) : (
        <div className="empty-cart__container">
          <button className="help-button">Help</button>
          <div className="empty-cart-content">
            <h1>Your cart is empty</h1>
            <span>Have an account? Sign in to see your cart</span>
            <button>Sign in</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
