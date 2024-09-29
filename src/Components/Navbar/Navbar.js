import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ title }) {
  const [scrolling, setScrolling] = useState(false);
  const [isNavActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  const handleBurgerClick = () => {
    setNavActive(!isNavActive);
    handleNavLinksAnimation();
  };

  const handleNavLinksAnimation = () => {
    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach((link, index) => {
      if (isNavActive) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  };

  return (
    <>
      <section className={scrolling ? "scrolling__nav " : ""}>
        <nav className={scrolling ? "nav-opacity" : ""}>
          <div className="logo">
            <h4>{title}</h4>
          </div>
          <ul className={`nav-links ${isNavActive ? "nav-activ" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <div
            className={`burger ${isNavActive ? "toggle" : ""}`}
            onClick={handleBurgerClick}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </section>
      <></>
    </>
  );
}
