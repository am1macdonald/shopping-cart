import React, { useRef } from "react";
import styles from "./cart.module.scss";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const { thumbnail, title, discountPercentage, price, quantity } = item;

  const valueRef = useRef(null);

  const handleUpdate = (e) => {
    e.preventDefault();
    const int = parseInt(valueRef.current.value);
    if (int > item.stock) {
      return;
    }
    if (!int) {
      removeItem(item);
      return;
    }
    updateQuantity({ ...item, quantity: int });
  };

  return (
    <li className={`flex-row ${styles.itemTile}`}>
      <div>
        <img
          className={`${styles.cartImg}`}
          src={`${thumbnail}`}
          alt={`${title}`}
        />
      </div>
      <div className={`${styles.numberDiv}`}>
        <form>
          <ul>
            {discountPercentage ? (
              <li>
                price: <s>${`${price}`}</s> $
                {Math.round(price * (1 - discountPercentage / 100))}
              </li>
            ) : (
              <li>price: ${`${price}`}</li>
            )}
            {discountPercentage && (
              <li>discount: {`${Math.round(discountPercentage)}`}%</li>
            )}
            <li>stock: {item.stock}</li>
            <li>
              <label htmlFor="quantity">quantity: </label>
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
                type="submit"
                form={`form-${item.id}`}
                onClick={handleUpdate}
              >
                update*
              </button>
            </li>
          </ul>
        </form>
      </div>
    </li>
  );
};

export default CartItem;
