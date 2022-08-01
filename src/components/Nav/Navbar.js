import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex-row">
      <div>
        <span>MEGA LO MART</span>
      </div>
      <div>
        <ul className="flex-row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
