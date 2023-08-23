import IconPurple1 from "../../assets/iconpurple1.svg";
import IconPurple2 from "../../assets/iconpurple2.svg";
import { Trash } from "@phosphor-icons/react";
import styles from "./selectedCoffeeCard.module.css"
import { useState } from "react";


export function SelectedCoffeeCard({coffee, removeCoffee, updateCoffeeQuantity, handleDecrementCoffee, handleIncrementCoffee, onIncrement, onDecrement}) {
  console.log("SelectedCoffeeCard - coffee:", coffee);

  const { id, name, image, price} = coffee
  

  console.log("CoffeeCard - coffee:", coffee);
    
  const handleIncrementCoffee = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    console.log("Coffee ID:", coffee.id);
    onIncrement(coffee.id, quantity);
   
  };

  const handleDecrementCoffee = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
      onDecrement(coffee.id, quantity);
    }
  };


       
  const handleIncrementCoffee = () => {
    updateCoffeeQuantity(id, coffee.quantity + 1)
  };

  const handleDecrementCoffee = () => {
    if (coffee.quantity <= 0) {
      removeCoffee(coffee.id);
    } else {
      updateCoffeeQuantity(coffee.id, coffee.quantity - 1);
    }
    
  };

  const handleRemoveCoffee = () => {
    removeCoffee(coffee.id)
    console.log('aquiii')
  };
  


    return (

        <div key={coffee.id} className={styles.containerSelectBox} >
                <img src={coffee.image} />
              <div className={styles.cardSelect} >
                  <div className={styles.cardExpress} >
                      <h3>{coffee.name}</h3>
                      <p>R$ {deliveryPrice}</p>
                  </div>
                  <div className={styles.cardRemove} >
                      <p className={styles.coffeeCardBox2P2}>
                      <button onClick={handleDecrementCoffee}>
                        <img src={IconPurple1}/>
                      </button>
                      {coffee.quantity}
                      <button onClick={handleIncrementCoffee}>
                        <img className={styles.box3} src={IconPurple2}/>
                      </button>
                      </p>
                      <span >
                        <button onClick={handleRemoveCoffee}>
                            <Trash size={32} className={styles.trash} />
                            REMOVER
                        </button>
                      </span>
                  </div>
              </div>
              </div>
    )
}