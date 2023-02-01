import React from "react";

import Button from "../components/Button"

import styles from "./Product.module.css";

const Product = ({ id, name, makings, value, img }) => {
  const url = `../assets/${img}.jpg`;

  return (
    <div className={styles.product}>
      <img src={require(`../assets/${img}.jpg`)} alt={url} />
      <div className={styles.details}>
        <h4>{name}</h4>
        <p>
          <span>Ingredientes:</span> {makings}
        </p>
        <p>
          <span>Valor: </span> R${value}0
        </p>
      </div>
      <div className={styles.container_button}>
      <Button text="Adicionar ao carrinho"/>
      </div>
    </div>
  );
};

export default Product;
