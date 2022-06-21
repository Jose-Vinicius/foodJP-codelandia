import React from "react";

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src="../../public/imagens/logos/FoodJP.png" alt="Logo da marca FoodJP" />
            <div className="navbar__menu">
                <a href="#">Inicio</a>
                <a href="#">Cardápio</a>
                <a href="#">Sobre</a>
            </div>
            <button className="navbar__button--login">Entrar</button>
        </nav>
    )
}