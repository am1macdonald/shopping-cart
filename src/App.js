import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ItemTile from "./components/Shop/ItemTile";
import Cart from "./components/Cart/Cart";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.products);
        setLoading(false);
      });
  }, []);

  const getTotalItems = useCallback(() => {
    let total = 0;

    for (let item of shoppingCart) {
      total += item.quantity;
    }
    console.log(total);
    return total;
  }, [shoppingCart]);

  const sortHandler = (type) => {
    setLoading(true);
    let sorted = [...products];

    if (type === "alphabetical") {
      sorted.sort((a, b) => {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return 1;
        } else {
          return -1;
        }
      });
      setProducts(sorted);
      setLoading(false);
      return;
    }
    if (type === "price asc") {
      sorted.sort((a, b) => a.price - b.price);
      setProducts(sorted);
      setLoading(false);

      return;
    }
    if (type === "price desc") {
      sorted.sort((a, b) => b.price - a.price);
      setProducts(sorted);
      setLoading(false);

      console.log(products)
      return;
    }
  };

  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, { ...item, quantity: 1 }]);
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
        return null;
      })
    );
  };

  useEffect(() => {
    setTotalItems(getTotalItems());
  }, [shoppingCart, getTotalItems]);

  const items = products.map((item) => {
    let quantity = 0;

    for (let thing of shoppingCart) {
      if (thing.id === item.id) {
        quantity = thing.quantity;
      }
    }

    return (
      <ItemTile
        key={item.id}
        id={item.id}
        item={item}
        title={item.title}
        thumbnail={item.thumbnail}
        price={item.price}
        addToCart={addToCart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        shoppingCart={shoppingCart}
        products={products}
        quantity={quantity}
      />
    );
  });

  return (
    <div data-testid="app" className="app">
      <BrowserRouter>
        <Navbar totalItems={totalItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop loading={loading} sort={sortHandler}>
                {items}
              </Shop>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
