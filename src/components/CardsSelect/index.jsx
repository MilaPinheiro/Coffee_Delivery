import React, { useState } from 'react'; 
import styles from "./cardsSelect.module.css";
import { SuccessOrder } from '../SuccessOrder';
import { listCoffee } from "../../data/listCoffe";
import IconPurple1 from "../../assets/iconpurple1.svg";
import IconPurple2 from "../../assets/iconpurple2.svg";
import { Trash } from "@phosphor-icons/react";

export function CardsSelect({selectCoffee, selectedCoffees, removeCoffee, onConfirmOrder}) {

    console.log(selectedCoffees)

    
    let amountSelectedPrice = 0;
   

    selectedCoffees.forEach(coffeeId => {
        const selectedCoffee = listCoffee.find(coffee => coffee.id === coffeeId);
        if (selectedCoffee) {
            amountSelectedPrice += selectedCoffee.price;
        }

        console.log(`"ID" +${coffeeId}`)
    });

    console.log(amountSelectedPrice)


    const priceDelivery = amountSelectedPrice > 0 ? amountSelectedPrice + 3.50 : 0.00;
  

    return (

    <>
    <section className={styles.sectionTwo}>
        <div className={styles.containerSectionCoffee}>
            <h2 className={styles.containerSectionCoffeeTitle}>
            Cafés selecionados
            </h2>
        </div>
        <div className={styles.containerSelect}>
        {selectedCoffees.map(coffeeId => {
            const coffee = listCoffee.find(item => item.id === coffeeId);
            console.log(listCoffee);
        return (
        <div key={coffee.id} className={styles.containerSelectBox} >
            <img src={coffee.image} />
            <div className={styles.cardSelect} >
                <div className={styles.cardExpress} >
                    <h3>{coffee.name}</h3>
                    <p>R$ {coffee.price}</p>
                </div>
                <div className={styles.cardRemove} >
                    <p className={styles.coffeeCardBox2P2}><img src={IconPurple1} />1 <img className={styles.box3} src={IconPurple2}/></p>
                    <span ><Trash size={32} className={styles.trash} onClick={() => removeCoffee(coffee.id)}/>REMOVER</span>
                </div>
            </div>
        </div>
        );
    })}

    <div className={styles.selectOrder}>
        <div className={styles.selectIntens}>
            <p>Total de intens</p>
            <span>{`R$ ${amountSelectedPrice.toFixed(2)}`}</span>
        </div>
        <div className={styles.selectIntens}>
            <p>Entrega</p>
            <span>R$3,50</span>
        </div>
        <div className={styles.selectIntensTwo}>
            <p>Total</p>
            <span>{`R$ ${priceDelivery.toFixed(2)}`}</span>
        </div>
        <button className={styles.buttonOrder} onClick={onConfirmOrder}>CONFIRMAR PEDIDO</button>
        
    </div>

    
    </div>

   
  
    </section>
</>
    )
}
