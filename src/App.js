import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { ProductContext } from "./context/ProductContext";
import { Provider } from "react-redux";
import store from "./stores/Store";
import "./App.css";
import Products from "./pages/products";
import Cart from "./pages/cart";

function App() {
  const [productType, setProductType] = useState("All");

  return (
    <div className="App">
      <Provider store={store}>
        <ProductContext.Provider value={{ productType, setProductType }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProductContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
