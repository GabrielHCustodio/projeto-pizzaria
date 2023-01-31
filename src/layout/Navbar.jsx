import React from "react";
import { Link } from "react-router-dom";

import { CgEnter, CgShoppingBag } from "react-icons/cg";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">TransAmerica Pizzaria</Link>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/login">
            <CgEnter /> Login
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/shopping">
            <CgShoppingBag /> Carrinho
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
