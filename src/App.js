import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { MyContext } from "./context/MyContext";
import { Provider } from "react-redux";
import { store } from "../src/stores";
import "./App.css";
import Products from "./pages/products";
import Cart from "./pages/cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Provider store={store}>
        <MyContext.Provider value={{ cart, setCart }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
