import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Arman</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://t.me/Vicious_Kisses"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-telegram-alt"></i>
          </a>

          <a
            href="https://wa.me/+989102332877"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-whatsapp"></i>
          </a>

          <a
            href="https://github.com/armanwebdev1"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
