// Dependencias

import React, { useContext, useEffect } from "react";

// Estilos

import "../filter/filter.styles.css";

//Componentes
import {AppContext} from "../../Context/AppContext";
import { requestGetProducts } from "../../utils/constants";

function Filter() {
    const {recent, setRecent} = useContext(AppContext);
    const {lowestPrice, setLowestPrice} = useContext(AppContext);
    const {highestPrice, setHighestPrice} = useContext(AppContext);


    //Handlers

    const handlerRecentBtn =(e)=>{
        setRecent(!recent);
    }

    const handlerLowestBtn =(e)=>{
        setLowestPrice(!lowestPrice);
    }

    const handlerHighestBtn =(e)=>{
        setHighestPrice(!highestPrice);
    }

    //Filtros encadenados

    // useEffect(()=>{
    //     if (setRecent){
    //         setLowestPrice(false);
    //         setHighestPrice(false);
    //         requestGetProducts()
    //     }
    // })



    return (
        <div className="Filter-container">
            <h2 className="Filter-number-products">""of""products</h2>
            <div className="Filter-options">
                <h2 className="Filter-sort">Sort by:</h2>
                <button onclick={handlerRecentBtn} className="Filter-btn">Most Recent</button>
                <button onClick={handlerLowestBtn} className="Filter-btn">Lowest price</button>
                <button onClick={handlerHighestBtn} className="Filter-btn">Higher price</button>
            </div>
            <div className="Filter-arrow-left" ></div>
            <div className="Filter-arrow-right" ></div>

        </div>
    )
}

export { Filter };