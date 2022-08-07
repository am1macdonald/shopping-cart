import styles from "./shop.module.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const Shop = (props) => {
  const handleChange = (e) => {
    props.sort(e.target.value);
  };

  return (
    <div className="page">
      <div className={`container ${styles.noPadding}`}>
        <span className={`flex-row ${styles.span}`}>
          <label htmlFor="sort">sort:</label>
          <select name="sort" id="sort" onChange={handleChange}>
            <option value="select">select</option>
            <option value="alphabetical">alphabetical</option>
            <option value="price asc">price ↑</option>
            <option value="price desc">price ↓</option>
          </select>
        </span>

        {props.loading && <div>loading</div>}
        {!props.loading && (
          <SimpleBar className={styles.simpleBar}>
            <ul className={`${styles.itemGrid}`}>{props.children}</ul>
          </SimpleBar>
        )}
      </div>
    </div>
  );
};

export default Shop;
