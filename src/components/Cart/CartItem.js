import React, { useRef } from "react";
import styles from "./cart.module.scss";

const CartItem = ({ item }) => {
  const { thumbnail, title, discountPercentage, price, quantity } = item;

  const valueRef = useRef(null);

  return (
    <li className={`flex-row ${styles.itemTile}`}>
      <div>
        <img className={`${styles.cartImg}`} src={`${thumbnail}`} alt={`${title}`} />
      </div>
      <div className={`${styles.numberDiv}`}>
        <ul>
          {discountPercentage ? (
            <li>
              Price: <s>${`${price}`}</s> $
              {Math.round(price * (1 - discountPercentage / 100))}
            </li>
          ) : (
            <li>Price: ${`${price}`}</li>
          )}
          {discountPercentage && (
            <li>Discount: {`${Math.round(discountPercentage)}`}%</li>
          )}
          <li>
            <label htmlFor="quantity">Quantity: </label>
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
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CartItem;
