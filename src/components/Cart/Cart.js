import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import styles from "./cart.module.scss";

const Cart = ({ children, totalCost, checkCart, emptyCart }) => {
  const handleClick = () => {
    if (checkCart) {
      alert("Thanks for shopping!");
      emptyCart();
    } else {
      alert("Nothing in Cart!");
    }
  };

  return (
    <div className={`page ${styles.shopPage}`}>
      <div className={`container`}>
        <div className={`${styles.leftAlign} border-bottom`}>
          <h3>your cart</h3>
        </div>

        <SimpleBar className={styles.simpleBar}>
          <ul className={`${styles.cart}`}>{children}</ul>
        </SimpleBar>
      </div>
      <div className={`container ${styles.flexBottom}`}>
        <p>total: ${totalCost()}</p>
        <button onClick={handleClick}>checkout</button>
      </div>
    </div>
  );
};

export default Cart;
