import "/src/styles/AddToCartBtn.css";

function AddToCardBtn({ widthPercentage, addToCart, productInfo, quantity }) {
  const style = {
    width: widthPercentage + "%",
  };
  return (
    <button
      style={style}
      className="add-to-cart-btn"
      onClick={() => addToCart(productInfo, quantity)}
    >
      Add to cart
    </button>
  );
}

export default AddToCardBtn;
