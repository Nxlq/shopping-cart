import "/src/styles/AddToCartBtn.css";

function AddToCardBtn({ widthPercentage }) {
  const style = {
    width: widthPercentage + "%",
  };
  return (
    <button style={style} className="add-to-cart-btn">
      Add to cart
    </button>
  );
}

export default AddToCardBtn;
