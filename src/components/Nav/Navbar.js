import React from "react";
import { Link } from "react-router-dom";

function Navbar({totalItems}) {

  return (
    <nav className="flex-row">
      <div className="brand">
        <span>MEGA LO MART</span>
      </div>
      <div>
        <ul className="flex-row">
          <li>
            <Link to="/">Home*</Link>
          </li>
          <li>
            <Link to="/shop">Shop*</Link>
          </li>
          <li>
            <Link to="/cart">Cart*{totalItems > 0 && <sup>({totalItems})</sup>}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
