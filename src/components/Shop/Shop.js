import React, { useEffect, useState } from "react";
import styles from "./shop.module.scss";

const generatePrice = () => {
  return Math.random() * 100 + 20;
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
  console.log(products);
  return products;
};

const ItemTile = ({ title, image }) => {
  return (
    <li className={`container ${styles.itemTile}`}>
      <img src={image} alt={title} className={styles.itemImg} />
      <h4>{title}</h4>
      <div>
        <div className="hidden">
          <label htmlFor="quantity"></label>
          <input type="number" title="quantity" id="quantity" />
        </div>

        <div>
          <button>Add to Cart</button>
          <button>Item Details</button>
        </div>
      </div>
    </li>
  );
};

const Shop = () => {
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
    <ItemTile key={item.id} title={item.title} image={item.images[0]} />
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
