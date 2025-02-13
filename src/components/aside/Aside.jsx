import React, { useContext } from "react";
import ProductsList from "../ProductsList/ProductsList";

import { UserContext } from "../../contexts/UserContext";
import "./aside.css";
import Profile from "../../pages/profile/Profile";
function Aside() {
  const { users, dispatch } = useContext(UserContext);
  return (
    <aside className="side active">
      <ProductsList />
    </aside>
  );
}

export default Aside;
