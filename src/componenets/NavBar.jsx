import "/src/styles/Nav.css";
import { formatCategoryHeader } from "../helperFunctions";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function DropDownCategories({ categories }) {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  const dropDownRef = useRef(null);
  const dropDownButtonRef = useRef(null);

  function toggleDropDown() {
    setIsActive(!isActive);
  }

  // this effect handles closing the drop down when the user clicks anywhere except the component itself while the dropdown is open
  useEffect(() => {
    if (!isActive) return;

    // close the drop down when the user clicks something other than the button or dropdown menu
    function handleOutsideClick(e) {
      if (
        !dropDownButtonRef.current.contains(e.target) &&
        !dropDownRef.current.contains(e.target)
      ) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isActive]);

  // this effect handles closing the drop down when the url changes
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <>
      <a
        ref={dropDownButtonRef}
        onClick={(e) => {
          e.preventDefault();
          toggleDropDown();
        }}
        href=""
      >
        Categories
        <img
          className="arrow-dropdown"
          src="/arrow-down-simple-svgrepo-com (2).svg"
          alt=""
        />
      </a>
      {isActive && (
        <div ref={dropDownRef} className="dropdown">
          <ul>
            <h2>All Categories</h2>
            {!categories && <li>Loading...</li>}
            {categories &&
              categories.map((cat) => {
                const formattedCat = formatCategoryHeader(cat);
                return (
                  <li key={cat}>
                    <Link to={`category/${cat}`}>{formattedCat}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
}

function NavBar({ categories }) {
  return (
    <>
      <nav className="nav-shopping">
        <img className="logo" src="/Target_Bullseye-Logo_Red_transparent.png" />
        <ul className="nav-links">
          <li id="categories-btn">
            <DropDownCategories categories={categories} />
          </li>
          <li>
            <a onClick={(e) => e.preventDefault()} href="">
              Deals
              <img
                className="arrow-dropdown"
                src="/arrow-down-simple-svgrepo-com (2).svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a onClick={(e) => e.preventDefault()} href="">
              What&apos;s New
              <img
                className="arrow-dropdown"
                src="/arrow-down-simple-svgrepo-com (2).svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a onClick={(e) => e.preventDefault()} href="">
              Pickup & Delivery
              <img
                className="arrow-dropdown"
                src="/arrow-down-simple-svgrepo-com (2).svg"
                alt=""
              />
            </a>
          </li>
        </ul>
        <div className="search-bar__container">
          <label>
            <input
              type="text"
              placeholder="What can we help you find?
        "
            />
          </label>
          <div className="search-bar-icons__container">
            <svg
              className="mic-icon"
              alt="search using microphone button"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V5Z"
                  fill="#666666"
                ></path>{" "}
                <path
                  d="M6.25 11.8438V12C6.25 13.525 6.8558 14.9875 7.93414 16.0659C9.01247 17.1442 10.475 17.75 12 17.75C13.525 17.75 14.9875 17.1442 16.0659 16.0659C17.1442 14.9875 17.75 13.525 17.75 12V11.8438C17.75 11.2915 18.1977 10.8438 18.75 10.8438H19.25C19.8023 10.8438 20.25 11.2915 20.25 11.8437V12C20.25 14.188 19.3808 16.2865 17.8336 17.8336C16.5842 19.0831 14.9753 19.8903 13.25 20.1548V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V20.1548C9.02471 19.8903 7.41579 19.0831 6.16637 17.8336C4.61919 16.2865 3.75 14.188 3.75 12V11.8438C3.75 11.2915 4.19772 10.8438 4.75 10.8438H5.25C5.80228 10.8438 6.25 11.2915 6.25 11.8438Z"
                  fill="#666666"
                ></path>{" "}
              </g>
            </svg>
            <svg
              className="search-icon"
              alt="search button"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
                  fill="#666666"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="sign-in__container">
          <a href="">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Sign in
          </a>
        </div>
        <svg
          className="icon-cart"
          fill="#000000"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M13.35 10.48H4.5l-.24-1.25h9.13a1.24 1.24 0 0 0 1.22-1l.84-4a1.25 1.25 0 0 0-1.22-1.51H3l-.22-1.24H.5v1.25h1.25l1.5 7.84a2 2 0 0 0-1.54 1.93 2.09 2.09 0 0 0 2.16 2 2.08 2.08 0 0 0 2.13-2 2 2 0 0 0-.16-.77h5.49a2 2 0 0 0-.16.77 2.09 2.09 0 0 0 2.16 2 2 2 0 1 0 0-4zM14.23 4l-.84 4H4l-.74-4zM3.87 13.27A.85.85 0 0 1 3 12.5a.85.85 0 0 1 .91-.77.84.84 0 0 1 .9.77.84.84 0 0 1-.94.77zm9.48 0a.85.85 0 0 1-.91-.77.92.92 0 0 1 1.81 0 .85.85 0 0 1-.9.77z"></path>
          </g>
        </svg>
      </nav>
    </>
  );
}

export default NavBar;
