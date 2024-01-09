import "/src/styles/AddToCartBtn.css";
import { useEffect, useRef, useState } from "react";

function AddToCardBtn({ widthPercentage, addToCart, productInfo, quantity }) {
  const [clicked, setClicked] = useState(false);
  const style = {
    width: widthPercentage + "%",
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClicked(false);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [clicked]);
  return (
    <button
      style={style}
      className="add-to-cart-btn"
      onClick={() => {
        if (clicked) return;
        addToCart(productInfo, quantity);
        setClicked(true);
      }}
    >
      {clicked ? "Added!" : "Add to cart"}
    </button>
  );
}

export default AddToCardBtn;
