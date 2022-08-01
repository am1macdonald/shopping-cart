import React, { useRef, useState } from "react";
import styles from "./shop.module.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// const generatePrice = () => {
//   return Math.random().toFixed(2) * 100 + 20;
// };

// const fakeAPI = () => {
//   const products = [];
//   for (let i = 0; i < 30; i++) {
//     products.push({
//       id: i,
//       title: `product ${i}`,
//       images: ["#"],
//       price: generatePrice(),
//     });
//   }
//   return products;
// };

const ItemTile = ({
  item,
  id,
  title,
  thumbnail,
  price,
  addToCart,
  updateQuantity,
  removeItem,
  shoppingCart,
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
      <div className={`container ${styles.imageContainer}`}>
        <img src={thumbnail} alt={title} className={styles.itemImg} />
      </div>
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
  const items = props.products.map((item) => (
    <ItemTile
      key={item.id}
      id={item.id}
      item={item}
      title={item.title}
      thumbnail={item.thumbnail}
      price={item.price}
      addToCart={props.addToCart}
      updateQuantity={props.updateQuantity}
      removeItem={props.removeItem}
      shoppingCart={props.shoppingCart}
      products={props.products}
    />
  ));

  return (
    <div className="page">
      <div className="flex-row space-between">

        <div className={`container ${styles.left}`}>
          <span>Filters</span>
        </div>

        <div className={`container ${styles.right}`}>
          <span className="flex-row">
            <h1>Products</h1>
            <p>sorting dropdown</p>
          </span>

          {props.loading && <div>Loading</div>}
          {!props.loading && (
            <SimpleBar className={styles.simpleBar}>
              <ul className={`${styles.itemGrid}`}>{items}</ul>
            </SimpleBar>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;
