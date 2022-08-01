import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

function App() {
  const [shoppingCart, setShoppingCart] = useState({});

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, { ...item.id, quantity: 1 }]);
  };

  const updateQuantity = useCallback(
    (item) => {
      setShoppingCart(
        shoppingCart.map((itemInCart) => {
          if (item.id === itemInCart.id) {
            return item;
          } else return itemInCart;
        })
      );
    },
    [shoppingCart]
  );

  const removeItem = (item) => {
    setShoppingCart(
      shoppingCart.filter((itemInCart) => {
        if (itemInCart.id !== item.id) {
          return itemInCart;
        }
      })
    );
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.products);
        setLoading(false);
        console.log(result.products);
      });
    // setProducts(fakeAPI());
    // setLoading(false);
  }, []);

  return (
    <div data-testid="app" className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                addToCart={addToCart}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                shoppingCart={shoppingCart}
                products={products}
                loading={loading}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
