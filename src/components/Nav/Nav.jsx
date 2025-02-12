import {useState} from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import Search from '../../pages/Search/Search';

function Nav() {
const {width,isSM,isMD,isLG,isXL,isSearch,isXXL} = useResize();

  return (
    <nav className="main-nav">
      <ul className={isXL ? "media700" : ""}>
        {isXL ? (
          ""
        ) : (
          <li id="menu">
            <i className="fa-solid fa-bars"></i>
            <ul className="sub-menu">
              <li>
                {" "}
                <NavLink to="/">Home Textille</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/">Towels </NavLink>
              </li>
            </ul>
          </li>
        )}
        <li>
          <NavLink to="/" id='home'>
            {isXL ? "Home" : <i className="fa-solid fa-house"></i>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" id='contact'>
            {" "}
            {isXL ? "Contact" : <i className="fa-solid fa-phone"></i>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about"> {isXL ? "About" : ""}</NavLink>
        </li>
        <li>
          <NavLink to="/search"> 
            {isSearch ? (
              <Search />
            ) : (
              <i className="fa-solid fa-magnifying-glass"></i>
            )}
          </NavLink>
        </li>

        <li className="registerBtn">
          <NavLink to="/register">Sign Up</NavLink>
          <br />
          <hr />
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li className="cartNavBtn">
          <NavLink to="/products">
            {isSM ? (
              <i className="fa-solid fa-cart-shopping"></i>
            ) : (
              <div>
                Your purchases
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
