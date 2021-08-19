import { useState, createContext } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [recent, setRecent] = useState(false);
    const [lowestPrice, setLowestPrice] = useState(false);
    const [highestPrice, setHighestPrice] = useState(false);

    return (
        <AppContext.Provider
            value={{
                recent,
                setRecent,
                lowestPrice,
                setLowestPrice,
                highestPrice,
                setHighestPrice
            }}>
            {children}
        </AppContext.Provider>
    );
}