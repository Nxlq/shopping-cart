import NavBar from "./NavBar";
import MinorNav from "./MinorNavBar";
import { useEffect, useRef, useState } from "react";
import HamburgerNavMenu from "./HamburgerNavMenu";
import "/src/styles/HamburgerMenuNav.css";

function Nav({ categories, itemCount }) {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

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
