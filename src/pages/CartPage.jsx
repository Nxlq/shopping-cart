import "/src/styles/CartPage.css";
import CardAdBanner from "../componenets/CardAdBanner";
import CircleAdBanner from "../componenets/CircleAdBanner";

function CartPage({ cartItems }) {
  const cartSubTotal = cartItems.reduce((sum, cur) => cur.price + sum, 0);
  const itemCount = cartItems.length;
  console.log(cartSubTotal);
  return (
    <div className="cart-page">
      {cartItems.length > 0 ? (
        <div className="populated-cart__container">
          <div className="cart-header">
            <h1>Cart</h1>
            <span>
              ${cartSubTotal} subtotal • {itemCount} items
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="empty-cart__container">
            <button className="help-button">Help</button>
            <div className="empty-cart-content">
              <h1>Your cart is empty</h1>
              <span>Have an account? Sign in to see your cart</span>
              <button>Sign in</button>
              <img
                src="/4380801cdd3f730465ca6d9375cc8905.png"
                alt="cute picture of a dog with a shopping bag"
              ></img>
            </div>
          </div>
          <CardAdBanner />
          <CircleAdBanner />
        </>
      )}
    </div>
  );
}

export default CartPage;
