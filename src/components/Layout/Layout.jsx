import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Aside from "../aside/Aside";
import Aside2 from "../aside/Aside2";
function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Aside2 />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
