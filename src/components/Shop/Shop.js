import React, { useEffect, useState } from "react";
import style from "./shop.module.scss";

const fakeAPI = () => {
  const products = [];
  for (let i = 0; i < 30; i++) {
    products.push({ id: i, title: `product ${i}`, images: ["#"] });
  }
  console.log(products)
  return products;
};

const ItemTile = ({ name, image }) => {
  return (
    <li>
      <img src={image} alt={name} className={style.itemImg} />
      <h4>{name}</h4>
      <span>Add to cart</span>
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
    <ItemTile key={item.id} name={item.title} image={item.images[0]} />
  ));

  return (
    <div>
      <h1>Shop</h1>
      <div>
        <span>sorter & pages</span>
        <div>
          <div>filters</div>
          <div>
            <h1></h1>
            {loading && <div>Loading</div>}
            <ul>{items}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;