import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./aside.css";
import Profile from "../../pages/profile/Profile";
import ShoppingCart from "../cart/ShopingCart";

function Aside() {
  const { state } = useContext(UserContext);


  return (
   
    <aside className="side active">
      <div id='side' >
        {state.isLogginned && <Profile />}
        <ShoppingCart />
      </div>
    </aside>
 
  );
}

export default Aside;
