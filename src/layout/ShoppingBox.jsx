import React from "react";

import { CgTrash } from "react-icons/cg"

import styles from "./ShoppingBox.module.css"

const ShoppingBox = ({ item }) => {
  return (
    <div className={styles.shopping}>
      <img src={require(`../assets/${item.img}.jpg`)} alt={item.name} />
      <div className={styles.shopping_details}>
        <h4>{item.name}</h4>
        <p>
          <span>Quantidade:</span>
          <input type="number" placeholder={item.quantity}/>
        </p>
        <p>
          <span>Valor: </span> R${item.value}0
        </p>
        <button>
            <CgTrash />
        </button>
      </div>
    </div>
  );
};

export default ShoppingBox;
