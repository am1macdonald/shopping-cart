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
  quantity,
}) => {
  const [displayQuantity, setDisplayQuantity] = useState(
    quantity ? true : false
  );

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
        <h4>{title}</h4>
        <p>${price}</p>
      </div>

      <div>
        {displayQuantity && (
          <form name={`form-${id}`} onSubmit={handleUpdate}>
            <div>
              <label htmlFor="quantity">Qty:</label>
              <button
                htmlFor="quantity"
                onClick={() => {
                  let value = parseInt(valueRef.current.value) + 1;
                  valueRef.current.value = value.toString();
                }}
              >
                +
              </button>
              <input
                className="no-spin"
                type="number"
                title="quantity"
                id="quantity"
                defaultValue={quantity}
                min={"0"}
                max={item.stock}
                ref={valueRef}
              />
              <button
                htmlFor="quantity"
                onClick={() => {
                  let value = parseInt(valueRef.current.value) - 1;
                  valueRef.current.value = value.toString();
                }}
              >
                -
              </button>
            </div>
            <div className={styles.buttonDiv}>
              <button type="submit" onClick={handleUpdate} form={`form-${id}`}>
                update*
              </button>
              <button>item details*</button>
            </div>
          </form>
        )}
        {!displayQuantity && (
          <div>
            <button onClick={handleAddToCart}>add to cart*</button>

            <button>item details*</button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ItemTile;
