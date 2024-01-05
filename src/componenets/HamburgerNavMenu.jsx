import CategoryDisplay from "./CategoryDisplay";

function HamburgerNavMenu({ categories }) {
  return (
    <>
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
        </div>
      </div>
    </>
  );
}

export default HamburgerNavMenu;
