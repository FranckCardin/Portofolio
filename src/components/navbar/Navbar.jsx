//IMPORT HOOK REACT 
import React from "react";
//IMPORT CSS
import "./navbar.scss";
import logoFC from "/assets/img/logo/LogoFC.png";

function Navbar() {
    return (
        /* NAVBAR */
        <header className="header">
            {/* LOGO NAVBAR */}
            <a href="#about" className="header__home">
                <img className="header__home_logo" src={logoFC} alt="Logo Franck Cardin" /> 
            </a>

            {/* MENU NAVBAR */}
            <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <a href="#about" className="navbar__link">
                                <i className="navbar__item_icons fa-solid fa-address-card"></i>
                            </a>
                        </li>

                        <li className="navbar__item">
                            <a href="#skills" className="navbar__link">
                                <i className="navbar__item_icons fa-solid fa-layer-group"></i>
                            </a>
                        </li> 

                        <li className="navbar__item">
                            <a href="#projects" className="navbar__link">
                                <i className="navbar__item_icons fa-solid fa-folder-open"></i>
                            </a>
                        </li> 

                        <li className="navbar__item">
                            <a href="#contact" className="navbar__link">
                                <i className="navbar__item_icons fa-solid fa-envelope"></i> 
                            </a>
                        </li>   
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar;

