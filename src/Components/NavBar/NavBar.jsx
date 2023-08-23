import React from "react";
import { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  const { active } = props;

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className={active === "home" ? "nav-item active" : "nav-item"}
              >
                <a href="#home">Home</a>
              </li>
              <li
                className={
                  active === "about" ? "nav-item active" : "nav-item"
                }
              >
                <a href="#about">Sobre Mi</a>
              </li>
              <li
                className={
                  active === "skill" ? "nav-item active" : "nav-item"
                }
              >
                <a href="#skill">Skills</a>
              </li>
              <li
                className={active === "project" ? "nav-item active" : "nav-item"}
              >
                <a href="#project">Proyectos</a>
              </li>
              <li
                className={active === "contact" ? "nav-item active" : "nav-item"}
              >
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
