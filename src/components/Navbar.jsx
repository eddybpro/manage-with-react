import { useState } from "react";
import { Logo, Close, Menu } from "../assets";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <a href="#" className="Logo" aria-label="manage">
        <img src={Logo} alt="manage" />
      </a>

      <div className="MenuBox">
        {isMenuOpen ? (
          <button
            aria-label="close"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={Close} alt="" />
          </button>
        ) : (
          <button
            aria-label="menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={Menu} alt="" />
          </button>
        )}
      </div>

      <div className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <ul>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              pricing
            </a>
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              product
            </a>
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              about us
            </a>
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              careers
            </a>
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              community
            </a>
          </li>
        </ul>
        <button className="NavLinks-Btn desktop">get started</button>
      </div>
    </nav>
  );
}
export default Navbar;
