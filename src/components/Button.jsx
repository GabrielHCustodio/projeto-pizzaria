import React from 'react';

import styles from "./Button.module.css"

const Button = ({text, handleSubmit}) => {
    return ( 
        <button className={styles.btn} onClick={handleSubmit}>{text}</button>
     );
}
 
export default Button;