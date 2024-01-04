import { useEffect, useState } from "react";
import "/src/styles/HamburgerMenuNav.css";
import CategoryDisplay from "./CategoryDisplay.jsx";

function HamburgerMenuNav({ categories }) {
  const [isActive, setIsActive] = useState(false);

  function toggleIsActive() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (!isActive) return;
    if (isActive) {
      document.body.style.overflow = "hidden";
    }

    // return () => (document.body.style.position = "static");
  }, [isActive]);

  return (
    <>
      <div className="hamburger-menu-container" onClick={toggleIsActive}>
        <img
          className="hamburger-menu-icon"
          src="/hamburger-menu-svgrepo-com.svg"
          alt="open menu button image"
        />
      </div>
      {isActive && (
        <div className="popout-background">
          <div className="mobile-nav-popout">
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
      )}
    </>
  );
}

export default HamburgerMenuNav;
