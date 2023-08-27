import React, { useState } from 'react';

import styles from "./coffee.module.css";
import IconButton from "../../assets/IconButton.svg";
import IconPurple1 from "../../assets/iconpurple1.svg";
import IconPurple2 from "../../assets/iconpurple2.svg";


export function Coffee({ coffee, selectCoffee}) {
  

    const [quantity, setQuantity] = useState(0);
   

    const handleIncrement = () => {
      setQuantity(prev => prev + 1);
     
    };
   

    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity(prev => prev - 1)
        
      }
    };

    const handleAddCoffee = () => {
      selectCoffee({
        ...coffee,
        quantity,
      });

      
    };
  

    return ( 

          <div className={styles.containerSectionCoffeeCard} >
            <div className={styles.sectionCoffeeCardImg}>
              <img src={coffee.image} />
            </div>
            <div className={styles.containerSectionCoffeeCardBox}>
            <div className={styles.tagsContainer}>
              {coffee.tags.map((tag) => (
                <h3 key={`${coffee.id}_${tag}`} title={tag}>
                  {tag.toUpperCase()}
                </h3>
              ))}
             </div>
              <p>{coffee.name}</p>
              <span>
                {coffee.description}
              </span>
            </div>
            <div className={styles.coffeeCardBox2}>
              <p className={styles.coffeeCardBox2P1}><span className={styles.money}>R$</span>{coffee.price}</p>
              <p className={styles.coffeeCardBox2P2}>
                <img src={IconPurple1} onClick={handleDecrement} />
                {quantity}
                <img src={IconPurple2}  onClick={handleIncrement}/></p>
              <button className={styles.coffeCardButton}  onClick={handleAddCoffee}>
                <img src={IconButton} />
              </button>
            </div>
          </div>
          
    )
}

