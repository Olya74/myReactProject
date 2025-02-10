import React from "react";
import "./Header.css";
import img from "../../assets/images/textile.png";
function Header() {
  return (
    <header className="main-head">
      <div className="logo">
        <span id="logo">Textile</span>
      </div>
      <div className="lang">
        en <i className="fa-solid fa-caret-down" />
      </div>
    </header>
  );
}

export default Header;
