// Dependencias
import React, { useState, useEffect, useContext } from "react";

//Estilos
import "../products/products.styles.css";

//Componentes
import { requestGetProducts } from "../../utils/constants";



function Products() {
    //Constantes
    //1. Constante que trae la lista de productos desde la API
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    //Handlers
    useEffect(() => {
        requestGetProducts(setProductList);
    }, []

    );
    console.log(productList);



    return (
        <div className="Products-container">
            <div className="Products-results"></div>
            {(productList || []).map((elements) => {
                return (<div key={elements.name}>
                    <p>{elements.name}</p>
                    <img src={elements.img.hdUrl} alt="" />
                </div>)
            })}
        </div>
    )
}

export { Products };