import "/src/styles/CartPage.css";
import CardAdBanner from "../componenets/CardAdBanner";
import CircleAdBanner from "../componenets/CircleAdBanner";
import CartItemsDisplay from "../componenets/CartItemsDisplay";

function CartPage({
  cartItems,
  itemCount,
  removeFromCart,
  changeItemQuantityInCart,
}) {
  const cartSubTotal = cartItems
    .reduce((sum, cur) => cur.price * cur.quantity + sum, 0)
    .toFixed(2);
  const salesTax = 1.08875;

  console.log(cartSubTotal);
  return (
    <div className="cart-page">
      {cartItems.length > 0 ? (
        <div className="populated-cart__container">
          <div className="cart-display__container">
            <div className="cart-header">
              <h1>Cart</h1>
              <span>
                ${cartSubTotal} subtotal • {itemCount}{" "}
                {`${itemCount === 1 ? "item" : "items"}`}
              </span>
            </div>
            <CartItemsDisplay
              cartItems={cartItems}
              itemCount={itemCount}
              removeFromCart={removeFromCart}
              changeItemQuantityInCart={changeItemQuantityInCart}
            />
          </div>
          <div className="cart-checkout">
            <h2>Order Summary</h2>
            <div className="order-summary__row">
              <img src="/a4108f12d497aeb1feca2930cc51e5a6.png" alt="" />
              <div className="checkout-spans__container">
                <span>${(cartSubTotal * salesTax).toFixed(2)} total</span>
                <span className="cart-count">
                  {itemCount} {`${itemCount === 1 ? "item" : "items"}`}
                </span>
              </div>
            </div>
            <div className="order-summary__row">
              <img className="tag-img" src="/tag-svgrepo-com.svg" alt="" />
              <div className="checkout-spans__container">
                <span className="extra-pad">3 offers available</span>
              </div>
            </div>
            <div className="order-summary__row">
              <img
                className="tag-img-gift"
                src="/present-svgrepo-com (1).svg"
                alt=""
              />
              <div className="checkout-spans__container">
                <span className="extra-pad no-bold">
                  Not eligible for gift message
                </span>
              </div>
            </div>
            <div className="order-summary__row">
              <img
                className="tag-img-gift"
                src="/coupon-discount-sale-svgrepo-com.svg"
                alt=""
              />
              <div className="checkout-spans__container last">
                <span className="extra-pad no-bold">Promo code</span>
              </div>
            </div>
            <button className="checkout-btn">Checkout</button>
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
