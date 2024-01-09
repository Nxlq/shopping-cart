import "/src/styles/Footer.css";

function AboutUsFoot() {
  return (
    <div className="about-us-foot">
      <h3>About Us</h3>
      <ul>
        <li>
          <a href="">About Target</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">News & Blog</a>
        </li>
        <li>
          <a href="">Target Brands</a>
        </li>
        <li>
          <a href="">Bullseye Shop</a>
        </li>
        <li>
          <a href="">Sustainability & Governance</a>
        </li>
        <li>
          <a href="">Press Center</a>
        </li>
        <li>
          <a href="">Advertise with Us</a>
        </li>
        <li>
          <a href="">Investors</a>
        </li>
      </ul>
    </div>
  );
}

function HelpFoot() {
  return (
    <div className="help-foot">
      <h3>Help</h3>
      <ul>
        <li>
          <a href="">Target Help</a>
        </li>
        <li>
          <a href="">Returns</a>
        </li>
        <li>
          <a href="">Track Orders</a>
        </li>
        <li>
          <a href="">Recalls</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Feedback</a>
        </li>
        <li>
          <a href="">Accessibility</a>
        </li>
        <li>
          <a href="">Security & Fraud</a>
        </li>
        <li>
          <a href="">Team Member Services</a>
        </li>
      </ul>
    </div>
  );
}

function StoresFoot() {
  return (
    <div className="stores-foot">
      <h3>Stores</h3>
      <ul>
        <li>
          <a href="">Find a Store</a>
        </li>
        <li>
          <a href="">Clinic</a>
        </li>
        <li>
          <a href="">Pharmacy</a>
        </li>
        <li>
          <a href="">Optical</a>
        </li>
        <li>
          <a href="">More-In-Store Services</a>
        </li>
      </ul>
    </div>
  );
}

function ServicesFoot() {
  return (
    <div className="services-foot">
      <h3>Services</h3>
      <ul>
        <li>
          <a href="">Target Circle</a>
        </li>
        <li>
          <a href="">RedCard</a>
        </li>
        <li>
          <a href="">Target App</a>
        </li>
        <li>
          <a href="">Registry</a>
        </li>
        <li>
          <a href="">Same Day Delivery</a>
        </li>
        <li>
          <a href="">Order Pickup</a>
        </li>
        <li>
          <a href="">Drive Up</a>
        </li>
        <li>
          <a href="">Free 2-Day Shipping</a>
        </li>
        <li>
          <a href="">Shipping & Delivery</a>
        </li>
      </ul>
    </div>
  );
}

function FooterSocials() {
  return (
    <div className="foot-socials__container">
      <div className="icon-container">
        <img
          className="social-icon-foot"
          src="/social-icons/pinterest-svgrepo-com.svg"
        />
      </div>
      <div className="icon-container">
        <img
          className="social-icon-foot"
          src="/social-icons/facebook-176-svgrepo-com.svg"
        />
      </div>
      <div className="icon-container">
        <img
          className="social-icon-foot"
          src="/social-icons/instagram-svgrepo-com (1).svg"
        />
      </div>
      <div className="icon-container">
        <img
          className="social-icon-foot"
          src="/social-icons/twitter-154-svgrepo-com.svg"
        />
      </div>
      <div className="icon-container">
        <img
          className="social-icon-foot"
          src="/social-icons/youtube-168-svgrepo-com.svg"
        />
      </div>
      <div className="icon-container">
        <img
          className="social-icon-foot"
          src="/social-icons/tiktok-svgrepo-com.svg"
        />
      </div>
    </div>
  );
}

function FooterLegalLinks() {
  return (
    <div className="foot-legal-links">
      <ul>
        <li>
          <a href="">Terms</a>
        </li>
        <li>
          <a href="">CA Supply Chain</a>
        </li>
        <li>
          <a href="">Privacy</a>
        </li>
        <li>
          <a href="">CA Privacy Rights</a>
        </li>
        <li>
          <a href="">Your Privacy Choices</a>
        </li>
        <li>
          <a href="">Internet Based Ads</a>
        </li>
        <li>TM & © 2023 Target Brands, Inc.</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top__wrapper">
          <AboutUsFoot />
          <HelpFoot />
          <StoresFoot />
          <ServicesFoot />
        </div>
      </div>
      <div className="footer-image"></div>
      <div className="footer-bottom">
        <div className="footer-bottom__wrapper">
          <FooterSocials />
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
