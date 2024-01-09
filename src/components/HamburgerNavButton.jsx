import "/src/styles/HamburgerMenuNav.css";

function HamburgerNavButton({ setIsHamburgerActive }) {
  return (
    <nav>
      <div
        className="hamburger-menu-container"
        onClick={() => setIsHamburgerActive(true)}
      >
        <img
          className="hamburger-menu-icon"
          src="/hamburger-menu-svgrepo-com.svg"
          alt="open menu button image"
        />
      </div>
    </nav>
  );
}

export default HamburgerNavButton;
