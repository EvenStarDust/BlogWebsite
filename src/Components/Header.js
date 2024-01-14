import React, { useEffect } from "react";
import './Header.css'

export default function Header() {
  useEffect(() => {
    const glitchWindow = document.createElement("div");
    glitchWindow.classList.add("glitch-window");

    const clonedGlitched = document.querySelector("h1.glitched").cloneNode(true);
    glitchWindow.appendChild(clonedGlitched);

    document.querySelector("header.header").appendChild(glitchWindow);
    
    return () => {
      document.querySelector("header.header").removeChild(glitchWindow);
    };
  }, []); //deleted

  return (
    <header className="header">
      <h1 className="glitched">Evenstar</h1>
    </header>
  );
}
