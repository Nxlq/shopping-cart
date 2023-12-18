import { useState } from "react";
import "/src/styles/QuantityDropdownBtn.css";

function QuantityDropdownBtn() {
  const [quantity, setQuantity] = useState(1);
  const [isActive, setIsActive] = useState(false);

  function toggleIsActive() {
    setIsActive(!isActive);
  }

  return (
    <div className="quantity-dropdown__wrapper">
      <button onClick={toggleIsActive} className="quantity-btn">
        Qty <span className="quantity">{quantity}</span>
        <img
          className="quantity-dropdown-arrow"
          src="/arrow-down-simple-svgrepo-com (2).svg"
          alt=""
        />
      </button>
      {isActive && (
        <div className="quantity-dropdown">
          <ul className="quantity-selection">
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
            <li>
              <button>5</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuantityDropdownBtn;
