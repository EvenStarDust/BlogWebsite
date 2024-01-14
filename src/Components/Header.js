import React, { useEffect } from "react";
import "./Header.css";

export default function Header() {
  useEffect(() => {
    const glitchWindow = document.createElement("div");
    glitchWindow.classList.add("glitch-window");

    const clonedGlitched = document
      .querySelector("h1.glitched")
      .cloneNode(true);
    glitchWindow.appendChild(clonedGlitched);

    document.querySelector("header.header").appendChild(glitchWindow);

    return () => {
      document.querySelector("header.header").removeChild(glitchWindow);
    };
  }, []); //deleted

  return (
    <header className="header">
      <div class="background-container" />
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      <h1 className="glitched">Evenstar</h1>
    </header>
  );
}
