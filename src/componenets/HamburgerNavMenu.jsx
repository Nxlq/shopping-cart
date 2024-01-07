import CategoryDisplay from "./CategoryDisplay";
import { useEffect, useReducer, useRef } from "react";

function HamburgerNavMenu({
  categories,
  isHamburgerActive,
  setIsHamburgerActive,
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isHamburgerActive) return;
    const root = document.getElementById("root");

    if (isHamburgerActive) root.classList.add("overflow-hidden");

    function handleOutsideClick(e) {
      if (!menuRef.current.contains(e.target)) {
        root.classList.remove("overflow-hidden");
        setIsHamburgerActive(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isHamburgerActive, setIsHamburgerActive]);

  return (
    <>
      <div className="popout-background">
        <div className="mobile-nav-popout" ref={menuRef}>
          <h3>Menu</h3>
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
