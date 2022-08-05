import React, { useRef, useState } from "react";
import styles from "./shop.module.scss";


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

export default ItemTile