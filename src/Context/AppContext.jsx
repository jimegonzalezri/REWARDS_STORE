import { useState, createContext } from "react";


export const AppContext = createContext();

export default function AppProvider({ children }) {
    // constantes para el Header
    const [getUser,setGetUser] = useState([]);
    const [userRefresh, setUserRefresh] = useState(false);

    //Constantes para el componente Productos
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [addPoints,setAddPoints]= useState(0);

    //Constantes para el componente filtro
    const [recent, setRecent] = useState(false);
    const [lowestPrice, setLowestPrice] = useState(false);
    const [highestPrice, setHighestPrice] = useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [itemsPerPage, setItemsPerPage]=useState(16);
   

    return (
        <AppContext.Provider
            value={{
                getUser,
                setGetUser,
                userRefresh,
                setUserRefresh,
                productList,
                setProductList,
                addPoints,
                setAddPoints,
                loading,
                setLoading,
                recent,
                setRecent,
                lowestPrice,
                setLowestPrice,
                highestPrice,
                setHighestPrice,
                currentPage,
                setCurrentPage,
                itemsPerPage,
                setItemsPerPage,
              

            }}>
            {children}
        </AppContext.Provider>
    );
}