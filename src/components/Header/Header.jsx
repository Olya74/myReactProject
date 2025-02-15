import {useContext} from "react";
import "./Header.css";
import { UserContext } from "../../contexts/UserContext";

function Header() {
  const {state} = useContext(UserContext);
  return (
    <header className="main-head">
      <div className="logo">
        <span id="logo">Textile</span>
      </div>
      {state.isLogginned && (
        <h2 style={{ paddingRight: "3rem" }}> Welcome {state.user.name}</h2>
      )}
      <div className="lang">
        <span>en</span> <i className="fa-solid fa-caret-down" />
      </div>
    </header>
  );
}

export default Header;
