import { useState } from "react";
import "/src/styles/QuantityDropdownBtn.css";

function QuantityDropdownBtn() {
  const [quantity, setQuantity] = useState(1);
  const [isActive, setIsActive] = useState(false);

  return (
    <button className="quantity-btn">
      Qty <span className="quantity">{quantity}</span>
      <img
        className="quantity-dropdown-arrow"
        src="/arrow-down-simple-svgrepo-com (2).svg"
        alt=""
      />
    </button>
  );
}

export default QuantityDropdownBtn;
