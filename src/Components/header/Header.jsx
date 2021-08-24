// Dependencias
import React, { useContext, useEffect } from "react";

// Estilos
import "../header/header.styles.css";

//Componentes
import { requestGetUser } from "../../utils/constants";
import { AppContext } from "../../Context/AppContext";

function Header() {
    //Constantes
    //1. Constante que trae la lista de user desde la API
    const { getUser, setGetUser } = useContext(AppContext);
    const {userRefresh, setUserRefresh} = useContext(AppContext);


    //Handlers
    useEffect(() => {
        if (getUser.length !==[] || userRefresh) {
            requestGetUser(setGetUser, setUserRefresh);
        }
    }, [getUser, userRefresh, setGetUser, setUserRefresh]);
    console.log(getUser);

    return (

        <div className="Header-container">
            <div className="Header-bar">
                <div className="Header-logo"></div>
                <div className="Header-UserAndCoins">
                    <h2 className="Header-user">{getUser.name}</h2>
                    <div className="Header-user-points">
                        <div className="Header-user-total-points">{getUser.points}</div>
                        <div className="Header-logo-coins"></div>
                    </div>
                </div>
            </div>
            <div className="Header-main-picture Header-clippath">
                <h1>Electronics</h1>

            </div>
        </div>


    )

};

export { Header };