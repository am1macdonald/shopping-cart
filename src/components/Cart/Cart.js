import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import styles from "./cart.module.scss";

const Cart = ({ children, totalCost }) => {
  return (
    <div className={`page ${styles.shopPage}`}>
      <div className={`container`}>
        <div className={`${styles.leftAlign} border-bottom`}>
          <h3>Your Cart</h3>
        </div>

        <SimpleBar className="simple-bar">
          <ul className={`${styles.cart}`}>{children}</ul>
        </SimpleBar>
      </div>
      <div className={`container ${styles.flexBottom}`}>
        <p>Total: ${totalCost()}</p>
      </div>
    </div>
  );
};

export default Cart;
