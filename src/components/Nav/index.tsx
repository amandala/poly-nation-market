import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
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
    </nav>
  );
};

export default Nav;
