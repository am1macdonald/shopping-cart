import styles from "./shop.module.scss";
import ItemTile from './ItemTile';
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

const Shop = (props) => {
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
              <ul className={`${styles.itemGrid}`}>{props.children}</ul>
            </SimpleBar>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;
