import React from "react";
import TengoSuerte from "./TengoSuerte";
import logo from "../assets/images/logo.svg"; // Suponiendo que tu logo está en la carpeta 'assets'

function HeroSection() {
  return (
    <div className="hero">
      <div className="row-logo-text">
        <img src={logo} alt="Logo Kingana" className="logo-img" />
        <div className="logo-complete">
          <h1 className="logo-big">kingana</h1>
          <p>películas y series</p>
        </div>
      </div>
      <div className="row-hero">
        <button>Entrar en kingana</button>
        <TengoSuerte></TengoSuerte>
      </div>
    </div>
  );
}

export default HeroSection;
