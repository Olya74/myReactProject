import React, { useContext } from "react";
import ProductsList from "../ProductsList/ProductsList";
import { UserContext } from "../../contexts/UserContext";
import "./aside.css";
import Profile from "../../pages/profile/Profile";
import Categories from "../categories/Categories";
function Aside() {
  const { state, dispatch } = useContext(UserContext);


  return (
    <aside className="side active">
      {state.isLogginned && <Profile />}
    </aside>
  );
}

export default Aside;
