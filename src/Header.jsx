import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header-yg">
      <nav className="NAV d-flex justify-content-between align-items-center">
        <div className="parentLOGO">
          <img
            className=" LOGO img-fluid"
            src="logo-white-C-YakDwu.svg"
            alt="logo"
          />
        </div>
        <ul className="ULLIST d-flex gap-12 ">
          <Link className="NAV-LINK" to="/about">
            About
          </Link>
          <Link className="NAV-LINK" to="/Aisolution">
            AI Solutions
          </Link>
          <li className="NAV-LINK">Product </li>
          <Link className="NAV-LINK" to="/Service">
            Services
          </Link>
          <li className="NAV-LINK">Case studies</li>
          <li className="NAV-LINK">Resources</li>
        </ul>
        <button className="BUTTON btn-solid theme-inverse">Contact Us</button>
      </nav>
    </header>
  );
}
export default Header;
