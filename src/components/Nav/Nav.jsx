import './Nav.css'
import { NavLink, Outlet } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import Search from '../../pages/Search/Search';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import ShoppingCart from '../cart/ShopingCart';

function Nav() {
const {isSM,isXL,isSearch} = useResize();
const {state}=useContext(UserContext);

  return (
    <>
      <nav className="main-nav">
        <ul className={isXL ? "media700 cartOder" : ""}>
          {isXL ? (
            ""
          ) : (
            <li id="menu">
              <i className="fa-solid fa-bars"></i>
              <ul className="sub-menu">
                <li>
                  {" "}
                  <NavLink to="/">Blanket</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/">Bed linen</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/">Towels </NavLink>
                </li>
              </ul>
            </li>
          )}
          <li>
            <NavLink to="/" id="home">
              {isXL ? "Home" : <i className="fa-solid fa-house"></i>}
            </NavLink>
          </li>
          {state.isLogginned && (
            <NavLink to="/users/:new" className="myAccount">
              {" "}
              {isXL ? "My Account" : <i className="fa-solid fa-user"></i>}
            </NavLink>
          )}

          <li>
            <NavLink to="/contact" id="contact">
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
            {state.isLogginned ? (
              <NavLink onClick={() => dispatchEvent({ type: "LOG_OUT" })}>
                Log Out
              </NavLink>
            ) : (
              <NavLink to="/login">Log In</NavLink>
            )}
          </li>
          <li className="cartNavBtn">
            <span className="totalQuantity">
              {!state.isEmpty && state.totalQuantity}
            </span>
            <NavLink to="/">
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
      <Outlet />
    </>
  );
}

export default Nav
