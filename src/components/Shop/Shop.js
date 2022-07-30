import React, { createContext, useEffect, useRef, useState } from "react";
import styles from "./shop.module.scss";

const generatePrice = () => {
  return Math.random().toFixed(2) * 100 + 20;
};

const fakeAPI = () => {
  const products = [];
  for (let i = 0; i < 30; i++) {
    products.push({
      id: i,
      title: `product ${i}`,
      images: ["#"],
      price: generatePrice(),
    });
  }
  return products;
};

const ItemTile = ({
  item,
  id,
  title,
  image,
  price,
  addToCart,
  updateQuantity,
  removeItem,
}) => {
  const [displayQuantity, setDisplayQuantity] = useState(false);

  const valueRef = useRef(null);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setDisplayQuantity(true);
    addToCart({ ...item, quantity: 1 });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const int = parseInt(valueRef.current.value);
    if (!int) {
      setDisplayQuantity(false);
      removeItem(item);
      return;
    }
    updateQuantity({ ...item, quantity: int });
  };

  return (
    <li className={`container ${styles.itemTile}`}>
      <img src={image} alt={title} className={styles.itemImg} />
      <h4>{title}</h4>
      <p>${price}</p>
      <div>
        {displayQuantity && (
          <form name={`form-${id}`} onSubmit={handleUpdate}>
            <label htmlFor="quantity">Qty:</label>
            <input
              type="number"
              title="quantity"
              id="quantity"
              defaultValue={1}
              ref={valueRef}
            />
            <button type="submit" onClick={handleUpdate} form={`form-${id}`}>
              update
            </button>
          </form>
        )}

        <div>
          {!displayQuantity && (
            <button onClick={handleAddToCart}>Add to Cart</button>
          )}
          <button>Item Details</button>
        </div>
      </div>
    </li>
  );
};

const Shop = (props) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((result) => {
    // setProducts(result.products);
    // setLoading(false);
    // console.log(result.products);
    //   throw new Error("fake API active");
    // })
    setProducts(fakeAPI());
    setLoading(false);
  }, []);

  const items = products.map((item) => (
    <ItemTile
      key={item.id}
      id={item.id}
      item={item}
      title={item.title}
      image={item.images[0]}
      price={item.price}
      addToCart={props.addToCart}
      updateQuantity={props.updateQuantity}
      removeItem={props.removeItem}
    />
  ));

  return (
    <div>
      <h1>Shop</h1>
      <div className="flex-row">
        <div className={`container ${styles.left}`}>
          <span>Filters</span>
        </div>

        <div className={`container ${styles.right}`}>
          <span className="flex-row">
            <h1>Products</h1>
            <p>sorting dropdown</p>
          </span>
          {loading && <div>Loading</div>}
          <ul className={styles.itemGrid}>{items}</ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
