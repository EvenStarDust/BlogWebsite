import React, { useState, useEffect } from "react";
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
      <nav className={scrolling ? "nav-opacity" : ""}>
        <div className="logo">
          <h4>{title}</h4>
        </div>
        <ul className={`nav-links ${isNavActive ? "nav-activ" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Accesories</a>
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

      <div className="banner">
        <div className="text">
          <h1></h1>
        </div>
      </div>
      <div></div>

      <div class="section1">
        <p>
         <p>Merhaba Bilgi Sevdalıları! </p> 
          Evenstar dünyasına hoş geldiniz! Burası,
          merakınızı tetikleyecek, sizi bilgiyle buluşturacak ve farklı
          konularda keşifler yapmanıza olanak tanıyacak bir platform. Uzayın
          derinliklerinden bilgisayar dünyasına, sıra dışı hayvan türlerinden
          güncel sosyal medya trendlerine kadar pek çok konuda bilgiye açılan
          kapı burada. Evenstar, herkesin ilgisini çekecek geniş bir içerik
          yelpazesi sunuyor. Sitemizde kaybolurken, farklı konular hakkında
          bilgi edinirken, ilginç ve eğlenceli detayları keşfederken zamanın
          nasıl geçtiğini anlamayacaksınız. Yenilikçi yazılar, ilham verici
          içerikler ve sizi düşündürecek makalelerle dolu olan sitemizde her gün
          yeni bir şey öğrenme fırsatı sizi bekliyor. Bu platformda her şeyi
          bulabilir, öğrenebilir ve paylaşabilirsiniz. Siz de Evenstar'a
          katılarak, bilgi dolu bir dünyanın kapılarını aralayın. Unutmayın,
          keşfetmek için asla geç değildir! Bilgi dolu günler dileriz! 
          <p>Evenstar
          Ekibi</p>
        </p>
      </div>
    </>
  );
}
