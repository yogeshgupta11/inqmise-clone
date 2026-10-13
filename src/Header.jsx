import "./header.css";
import Button from "./button";
import "./button.css";

function Header() {
  return (
    <header className="header">
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
        <Button />
      </ul>
    </header>
  );
}
export default Header;
