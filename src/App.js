import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, { ...item, quantity: 1 }]);
  };

  const updateQuantity = useCallback((item) => {
    setShoppingCart(
      shoppingCart.map((itemInCart) => {
        if (item.id === itemInCart.id) {
          return item;
        } else return itemInCart;
      })
    );
  }, [shoppingCart]);

  useEffect(() => {
    console.log(shoppingCart);
  });

  return (
    <div data-testid="app" className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} updateQuantity={updateQuantity} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
