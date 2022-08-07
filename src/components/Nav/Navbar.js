import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ totalItems }) {
  return (
    <nav className="flex-row">
      <div className="brand">
        <span>MEGA LO MART</span>
      </div>
      <div>
        <ul className="flex-row">
          <li>
            <NavLink
              to="/"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Home*
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Shop*
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Cart*{totalItems > 0 && <sup>({totalItems})</sup>}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
