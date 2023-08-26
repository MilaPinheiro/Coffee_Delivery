import React, { useState } from 'react';
import styles from './coffeeCard.module.css';
import IconPurple1 from '../../assets/iconpurple1.svg';
import IconPurple2 from '../../assets/iconpurple2.svg';
import { Trash } from '@phosphor-icons/react';

export function CoffeeCard({ coffee, removeCoffee, updateCoffeeQuantity, onSelectCoffee}) {
  const { id, name, image, price} = coffee
  const [quantity, setQuantity] = useState(coffee.quantity);
  console.log("CoffeeCard - removeCoffee",  removeCoffee);
  console.log("CoffeeCard - coffee:", coffee);
    
  const handleIncrementCoffee = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCoffeeQuantity(id, newQuantity);
  };

  const handleDecrementCoffee = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCoffeeQuantity(id, newQuantity);
    } else {
      removeCoffee(coffee.id);
    }
  };

  const handleRemoveCoffee = () => {
    console.log("Removing coffee with ID:", coffee.id);
    removeCoffee(coffee.id)
   
  };
  
  
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h3>{name}</h3>
        
        <div className={styles.boxMoney}>
          <p>R$ {price}</p>
         </div>
      <div className={styles.controls}>
        
        
        </div>
        <div className={styles.boxPrice}>
          <div className={styles.quantity}>
            <img className={styles.boxMargem} src={IconPurple1} onClick={handleDecrementCoffee} alt="Decrement" />
            <span>{quantity}</span>
            <img className={styles.boxMargem1} src={IconPurple2} onClick={handleIncrementCoffee} alt="Increment" />
          </div>
          <div className={styles.removeCoffe} onClick={() => handleRemoveCoffee(coffee.id)}>
            <Trash size={24} className={styles.remove}  />
            <span>REMOVER</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
