import React from 'react';
import logo from '../../images/Spotify_Logo_RGB_White.png';
import banner from '../../images/capa.png';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Spotify logo" className="navbar__logo" />
      <ul className="navbar__links">
        <li className="navbar__link">Premium</li>
        <li className="navbar__link">Ajuda</li>
        <li className="navbar__link">Baixar</li>
        <li className="navbar__link">|</li>
        <li className="navbar__link">Entrar</li>
      </ul> 
    </nav>
    
  );
}
export default Navbar;
