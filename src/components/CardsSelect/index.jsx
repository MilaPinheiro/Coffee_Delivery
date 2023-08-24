import React, { useState } from 'react'; 
import styles from "./cardsSelect.module.css";
import { CoffeeCard } from '../CoffeeCard'
import { formatCurrency } from '../util/currency';

export function CardsSelect({selectedCoffees,
     removeCoffee, onConfirmOrder, updateCoffeeQuantity, onDecrement, onIncrement,onSelectCoffee, selectCoffee}) {

        console.log("CardsSelect - selectedCoffees:", selectedCoffees);
 
    const totalItensPrice = selectedCoffees.reduce((acc, coffee) => {
        return acc + coffee.price * coffee.quantity
    }, 0)


    const formatItemPrice = formatCurrency(totalItensPrice)
    console.log("CardsSelect - totalItensPrice:", totalItensPrice);

    const deliveryPrice = selectedCoffees.length > 0  ? 3.5 : 0
    console.log("CardsSelect - deliveryPrice:", deliveryPrice);


    const  totalOrderPrice = totalItensPrice + deliveryPrice

    const fomatTotalOrderPrice = formatCurrency(totalOrderPrice)
    console.log("CardsSelect - totalOrderPrice:", totalOrderPrice);

 
    return (

    <>
    <section className={styles.sectionTwo}>
        <div className={styles.containerSectionCoffee}>
            <h2 className={styles.containerSectionCoffeeTitle}>
                 Cafés selecionados
            </h2>
        </div>
        <div className={styles.containerSelect}>
            {selectedCoffees.map((coffee) => {
            return (
            <CoffeeCard
             key={`${coffee.id}::${coffee.name}`}
             coffee={coffee}
             removeCoffee={removeCoffee}
             selectedCoffees={selectedCoffees}
             updateCoffeeQuantity={updateCoffeeQuantity}
             onSelectCoffee={onSelectCoffee}
             />
             )
            })}
           
    
            <div className={styles.selectOrder}>
                <div className={styles.selectIntens}>
                    <p>Total de intens</p>
                    <span>{formatItemPrice}</span>
                </div>
                <div className={styles.selectIntens}>
                    <p>Entrega</p>
                    <span>{deliveryPrice}</span>
                </div>
                <div className={styles.selectIntensTwo}>
                    <p>Total</p>
                    <span>{fomatTotalOrderPrice}</span>
                </div>
                <button className={styles.buttonOrder} onClick={onConfirmOrder}>CONFIRMAR PEDIDO</button>
                
            </div>
        </div>
    </section>
</>
)
    
}
