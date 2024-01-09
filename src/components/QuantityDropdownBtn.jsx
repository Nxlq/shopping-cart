import { useEffect, useRef, useState } from "react";
import "/src/styles/QuantityDropdownBtn.css";

function QuantityDropdownBtn({ quantity, setQuantity, itemId }) {
  const [isActive, setIsActive] = useState(false);

  const dropDownRef = useRef(null);
  const quantityBtnRef = useRef(null);

  // handles closing the quantity dropdown when the user clicks somewhere else on the page besides the dropdown
  useEffect(() => {
    if (!isActive) return;

    function handleOutsideClick(e) {
      if (
        !dropDownRef.current.contains(e.target) &&
        !quantityBtnRef.current.contains(e.target)
      ) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isActive]);

  const maxQuantity = 5;
  const liElementsArray = [];

  for (let i = 1; i <= maxQuantity; i += 1) {
    liElementsArray.push(
      <li key={i} className={quantity === i ? "selected" : ""}>
        <button
          onClick={(e) => {
            e.target.parentElement.classList.add("selected");
            setQuantity(i, itemId);
            setTimeout(() => {
              setIsActive(false);
            }, 60);
          }}
        >
          {i}
        </button>
      </li>
    );
  }

  function toggleIsActive() {
    setIsActive(!isActive);
  }

  return (
    <div className="quantity-dropdown__wrapper">
      <button
        ref={quantityBtnRef}
        onClick={toggleIsActive}
        className="quantity-btn"
      >
        Qty <span className="quantity">{quantity}</span>
        <img
          className="quantity-dropdown-arrow"
          src="/arrow-down-simple-svgrepo-com (2).svg"
          alt=""
        />
      </button>
      {isActive && (
        <div ref={dropDownRef} className="quantity-dropdown">
          <ul className="quantity-selection">{liElementsArray}</ul>
        </div>
      )}
    </div>
  );
}

export default QuantityDropdownBtn;
