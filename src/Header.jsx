import "./header.css";
import "./button.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg nav-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="logo-white-C-YakDwu.svg"
              alt="Logo"
              width="300"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
          <ul className="nav">
            <li className="nav-link ">About</li>
            <li className="nav-link ">AI Solutions</li>
            <li className="nav-link ">Product</li>
            <li className="nav-link ">Services</li>
            <li className="nav-link ">Case studies</li>
            <li className="nav-link ">Resources</li>
          </ul>
          <button type="button" className=" style btn-solid theme-inverse">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
