import CategoryDisplay from "./CategoryDisplay";
import { useEffect, useRef, useState } from "react";

function HamburgerNavMenu({
  categories,
  isHamburgerActive,
  setIsHamburgerActive,
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!isHamburgerActive) return;

    if (isHamburgerActive) {
      root.classList.add("overflow-hidden");
    }

    function handleOutsideClick(e) {
      if (!menuRef.current.contains(e.target)) {
        setIsHamburgerActive(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      root.classList.remove("overflow-hidden");
    };
  }, [isHamburgerActive, setIsHamburgerActive]);

  return (
    <>
      <div className="popout-background">
        <div
          className={`mobile-nav-popout ${isHamburgerActive ? "active" : ""}`}
          ref={menuRef}
        >
          <div className="mobile-nav-header__wrapper">
            <h3>Menu</h3>
            <img
              onClick={() => setIsHamburgerActive(false)}
              className="hamburger-close-btn"
              src="/close-round-svgrepo-com.svg"
              alt="close menu button"
            />
          </div>
          <div className="categories">
            <h4>Categories</h4>
            <div className="categories-container">
              {categories.map((cat) => (
                <CategoryDisplay key={cat} category={cat} />
              ))}
            </div>
          </div>
          <ul>
            <li>
              <a onClick={(e) => e.preventDefault()} href="">
                Registry
              </a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()} href="">
                Weekly Ad
              </a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()} href="">
                Redcard
              </a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()} href="">
                Target Circle
              </a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()} href="">
                Find Stores
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HamburgerNavMenu;
