import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="NAV">
        <div className="logo">
          <img className="img" src="logo-white-C-YakDwu.svg" alt="logo" />
        </div>
        <ul className="Nav">
          <li>About</li>
          <li>AI Solutions</li>
          <li>Product</li>
          <li>Services</li>
          <li>Case studies</li>
          <li>Resources</li>
          <button>Contact Us</button>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
