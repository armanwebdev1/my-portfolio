import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Arman
        </a>

        <div className={`nav__menu ${toggleMenu ? "show-menu" : ""}`}>
          <ul className="nav__list">
            {[
              { id: "#home", text: "خانه" },
              { id: "#about", text: "درباره من" },
              { id: "#skills", text: "مهارت‌ها" },
              { id: "#portfolio", text: "نمونه‌کار‌ها" },
              { id: "#contact", text: "تماس" },
            ].map((item) => (
              <li key={item.id} className="nav__item">
                <a href={item.id} className="nav__link">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setToggleMenu(!toggleMenu)}>
          <i className={`uil ${toggleMenu ? "uil-times" : "uil-bars"}`}></i>
        </div>
      </nav>
    </header>
  );
}
