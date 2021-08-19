// Dependencias
import React from "react";
import AppProvider from "./Context/AppContext";

// Estilos 
import './App.css';

//Componentes
import { Header } from "../src/Components/header/Header";
import { Filter } from "../src/Components/filter/Filter";
import { Products } from "../src/Components/products/Products";
import { Footer } from "../src/Components/footer/Footer";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Filter />
        <Products />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
