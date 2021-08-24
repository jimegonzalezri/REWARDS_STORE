// Dependencias
import React, { useState, useEffect, useContext } from "react";

//Estilos
import "../products/products.styles.css";

//Componentes
import { requestGetProducts } from "../../utils/constants";
import { AppContext } from "../../Context/AppContext";



function Products() {
    //Constantes
    //1. Constante que trae la lista de productos desde la API
    const { productList, setProductList } = useContext(AppContext);
    const { currentPage, setCurrentPage } = useContext(AppContext);
    const { itemsPerPage, setItemsPerPage } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const {addPoints,setAddPoints}= useContext(AppContext);

    //Handlers
    useEffect(() => {
        setLoading(true);
        if (setProductList !== []) {
            requestGetProducts(setProductList);
            setLoading(false);
        }
    }, []);
    console.log(productList);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="Products-container">
            <div className="Products-results">
                {(productList || []).map((elements) => {
                    // productList!=[]
                    return (<div key={elements.name} className="Products-items" >
                        <img className="Products-image" src={elements.img.hdUrl} alt="" />
                        <p>{elements.category}</p>
                        <p>{elements.name}</p>

                    </div>)
                })}
            </div>
        </div>
    )
}

export { Products };