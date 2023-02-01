import React, { useEffect, useState } from "react";

import api from "../services/api";

import ShoppingBox from "../layout/ShoppingBox";

import styles from "../products/Products.module.css";

const Shopping = () => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    api
      .get("shopping", {})
      .then((response) => {
        console.log(response.data);
        setItens(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.products}>
      <h2>Meu carrinho</h2>
      <div className={styles.container_product}>
        {itens.map((item) => (
          <ShoppingBox item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
