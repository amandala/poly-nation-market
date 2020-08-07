import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

import styles from "./index.module.scss";

const Nav = () => {
  const [{ isCartOpen, shop }, dispatch] = useStateValue();

  return (
    <nav className={styles.Nav}>
      <div className={styles.NavLinks}>
        <ul className={styles.Links}>
          <li className={styles.LinkWrapper}>
            <Link className={styles.Link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.LinkWrapper}>
            <Link className={styles.Link} to="/Marketplace">
              Marketplace
            </Link>
          </li>
        </ul>
        {!isCartOpen && shop && (
          <span className={styles.LinkWrapper}>
            <button
              className={styles.Link}
              onClick={() =>
                dispatch({
                  type: "SET_IS_CART_OPEN",
                  data: true,
                })
              }
            >
              Cart
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Nav;
