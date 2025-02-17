import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './layout.css'
function Layout() {
  return (
    <div className='wrapper'>
      <Header />
       <Nav />
      <Footer />
    </div>
  );
}

export default Layout;
