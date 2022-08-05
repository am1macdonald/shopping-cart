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

const Shop = (props) => {

  const handleChange = (e) => {
    props.sort(e.target.value);
  }

  return (
    <div className="page">
      <div className={`flex-row space-between ${styles.shopFlex}`}>
        <div className={`container ${styles.left}`}>
          <span>Filters</span>
        </div>

        <div className={`container ${styles.right}`}>
          <span className="flex-row">
            <label htmlFor="sort">sort:</label>
            <select name="sort" id="sort" onChange={handleChange}>
              <option value="alphabetical">alphabetical</option>
              <option value="price asc">price ↑</option>
              <option value="price desc">price ↓</option>
            </select>
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
