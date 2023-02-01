import React, { useEffect, useState } from "react";
import api from "../services/api";

import Product from "./Product";

import styles from "./Products.module.css"

const Products = ({ name }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    api
      .get("products", {})
      .then((response) => {
        const data = response.data;
        setPizzas(data.pizzas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.products}>
      <h2>{name}</h2>
      <div className={styles.container_product}>
        {pizzas.map((pizza) => (
          <Product
            pizza={pizza}
            key={pizza.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
