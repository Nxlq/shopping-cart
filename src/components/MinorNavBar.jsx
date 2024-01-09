import "/src/styles/Nav.css";

function MinorNav() {
  return (
    <div className="minor-nav__container">
      <ul className="minor-nav-links left">
        <li>
          <a className="location-link" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                fill="#F4F4F4"
                d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
              />
            </svg>
            11214
          </a>
        </li>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                fill="#F4F4F4"
                d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z"
              />
            </svg>
            Brooklyn Bay Parkway
          </a>
        </li>
      </ul>
      <ul className="minor-nav-links right">
        <li>
          <a href="">Registry</a>
        </li>
        <li>
          <a href="">Weekly Ad</a>
        </li>
        <li>
          <a href="">RedCard</a>
        </li>
        <li>
          <a href="">Target Circle</a>
        </li>
        <li>
          <a href="">Find Stores</a>
        </li>
      </ul>
    </div>
  );
}

export default MinorNav;
