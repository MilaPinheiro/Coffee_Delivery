import React, { useState } from 'react';
import styles from './coffeeCard.module.css';
import IconPurple1 from '../../assets/iconpurple1.svg';
import IconPurple2 from '../../assets/iconpurple2.svg';
import { Trash } from '@phosphor-icons/react';

export function CoffeeCard({ coffee, onIncrement, onDecrement, onRemove }) {
  const { id, name, image, price} = coffee;
  const [quantity, setQuantity] = useState(coffee.quantity);

  console.log(coffee)
    
  const handleIncrementCoffee = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    onIncrement(id);
   
  };

  const handleDecrementCoffee = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
      onDecrement(id);
    }
  };



  
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>R$ {price}</p>
      </div>
      <div className={styles.controls}>
        <div className={styles.quantity}>
          <img src={IconPurple1} onClick={handleDecrementCoffee} alt="Decrement" />
          <span>{quantity}</span>
          <img src={IconPurple2} onClick={handleIncrementCoffee} alt="Increment" />
        </div>
        <Trash size={24} className={styles.remove}  />
      </div>
    </div>
  );
}