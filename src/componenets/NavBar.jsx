import "/src/styles/Nav.css";

function NavBar() {
  return (
    <nav className="nav-shopping">
      <img className="logo" src="/Target_Bullseye-Logo_Red_transparent.png" />
      <ul className="nav-links">
        <li>
          <a href="">Category 1</a>
        </li>
        <li>
          <a href="">Category 2</a>
        </li>
        <li>
          <a href="">Category 3</a>
        </li>
        <li>
          <a href="">Category 4</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
