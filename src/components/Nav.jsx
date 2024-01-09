import NavBar from "./NavBar";
import MinorNav from "./MinorNavBar";
import { useEffect, useState } from "react";
import HamburgerNavMenu from "./HamburgerNavMenu";
import "/src/styles/HamburgerMenuNav.css";
import { useLocation } from "react-router-dom";

function Nav({ categories, itemCount }) {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const { pathname } = useLocation();

  // close the hamburger nav when the user changes url
  useEffect(() => {
    setIsHamburgerActive(false);
  }, [pathname]);

  return (
    <>
      <MinorNav categories={categories} isHamburgerActive={isHamburgerActive} />
      <NavBar
        categories={categories}
        itemCount={itemCount}
        setIsHamburgerActive={setIsHamburgerActive}
      />
      {isHamburgerActive && (
        <HamburgerNavMenu
          categories={categories}
          isHamburgerActive={isHamburgerActive}
          setIsHamburgerActive={setIsHamburgerActive}
        />
      )}
    </>
  );
}

export default Nav;
