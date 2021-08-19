// Dependencias
import React from "react";

// Estilos
import "../header/header.styles.css";



function Header() {


    return (

        <div className="Header-container">
            <div className="Header-bar">
                <div className="Header-logo"></div>
                <div className="Header-UserAndCoins">
                    <h2 className="Header-user">User</h2>
                    <div className="Header-user-points">
                    <div className="Header-user-total-points">coins</div>
                    <div className="Header-logo-coins"></div>
                    </div>
                </div>
            </div>
            <div className="Header-main-picture Header-clippath">
                <h1>Electronics</h1>

            </div>
        </div>


    )

}

export { Header };