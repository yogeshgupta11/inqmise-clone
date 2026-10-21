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
          <li className="nav-link"> About</li>
          <li className="nav-link">AI Solutions </li>
          <li className="nav-link">Product </li>
          <li className="nav-link">Services </li>
          <li className="nav-link">Case studies</li>
          <li className="nav-link">Resources</li>
        </ul>
        <button className="BUTTON btn-solid theme-inverse">Contact Us</button>
      </nav>
    </header>
  );
}
export default Header;
