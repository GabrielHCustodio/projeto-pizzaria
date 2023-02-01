import React from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

import Button from "../components/Button"

import styles from "./Product.module.css";

const Product = ({ pizza }) => {
  const history = useNavigate();

  const submit = () => {

    const item = ({ ...pizza, quantity: 1})

    api
      .post("shopping", item)
      .then(() => {
        history("/shopping");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.product}>
      <img src={require(`../assets/${pizza.img}.jpg`)} alt={pizza.name} />
      <div className={styles.details}>
        <h4>{pizza.name}</h4>
        <p>
          <span>Ingredientes:</span> {pizza.makings}
        </p>
        <p>
          <span>Valor: </span> R${pizza.value}0
        </p>
      </div>
      <div className={styles.container_button}>
        <Button text="Adicionar ao carrinho" handleSubmit={submit}/>
      </div>
    </div>
  );
};

export default Product;
