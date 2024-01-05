import NavBar from "./NavBar";
import MinorNav from "./MinorNavBar";
import { useState } from "react";
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
      {isHamburgerActive && <HamburgerNavMenu categories={categories} />}
    </>
  );
}

export default Nav;
