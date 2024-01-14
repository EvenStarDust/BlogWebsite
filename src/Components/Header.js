import React, { useEffect } from "react";
import './Header.css'

export default function Header() {
  useEffect(() => {
    // componentDidMount benzeri işlemleri useEffect içinde gerçekleştirelim
    const glitchWindow = document.createElement("div");
    glitchWindow.classList.add("glitch-window");

    const clonedGlitched = document.querySelector("h1.glitched").cloneNode(true);
    glitchWindow.appendChild(clonedGlitched);

    document.querySelector("header.header").appendChild(glitchWindow);

    // componentWillUnmount benzeri işlemleri useEffect içinde gerçekleştirelim
    return () => {
      document.querySelector("header.header").removeChild(glitchWindow);
    };
  }, []); // Bu boş dizi, sadece bir kere çalışmasını sağlar

  return (
    <header className="header">
      <h1 className="glitched">Evenstar</h1>
    </header>
  );
}
