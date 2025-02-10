import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="main-footer">
      <section>
        <p>Textile</p>
        <p>Интернет-магазин домашнего текстиля</p>
        <p>Main Street 123</p>
        <p>1234 Berlin</p>
      </section>
      <section>
        <p>Контакты</p>
        <p>Телефон: +49 123 456 789</p>
        <p>Email: </p>
      </section>
      <section>
        <a href="#">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
