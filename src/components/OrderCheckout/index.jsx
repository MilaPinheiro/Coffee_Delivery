import React from "react";
import { CardsSelect } from "../CardsSelect";
import styles from "./orderCheckout.module.css"
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";

export function OrderCheckout({selectCoffee, selectedCoffees}) { 

    console.log(selectCoffee)

    const removeCoffee = (coffeeId) => {
        selectCoffee(coffeeId)
    }

    return (
    <section className={styles.containerOrder}>
        <section className={styles.sectionTwo}>
            <div className={styles.containerSectionCoffee}>
                <h2 className={styles.containerSectionCoffeeTitle}>
                    Complete seu pedido
                </h2>
            </div>
            <div className={styles.containerDelivery}>
                <div className={styles.continarDeliveryBox}>
                    <div className={styles.mapBox}>
                       <span className={styles.mapBoxTitle}><MapPinLine size={32} className={styles.color}/>Endereço de Entrega</span>
                       <span className={styles.mapBoxSpan}>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                    <div className={styles.containerInputs}>
                        <input type="text" className={styles.inputBox1}   placeholder="CEP" />
                        <input type="text"  className={styles.inputBox} placeholder="Rua"/>
                    </div>
                    <div  className={styles.containerAddress}>
                       <div className={styles.home}>
                            <input type="text" className={styles.inputBox}  placeholder="Número"/>
                            <input type="text" className={styles.inputBox}   placeholder="Bairro"/>
                       </div>

                        <div className={styles.containerCity}>
                            <div className={styles.box1}>
                                <input type="text" className={styles.inputBox}  placeholder="Complemento"/>
                            </div>
                            <div className={styles.box2}>
                                <input type="text" className={`${styles.inputBox} ${styles.city}`}  placeholder="Cidade"/>
                                <input type="text" className={`${styles.inputBox} ${styles.inputUf}`}     placeholder="UF"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.containerDelivery}> 
                <div className={styles.continarDeliveryBox}>
                    <div className={styles.mapBox}>
                       <span className={styles.mapBoxTitle}><CurrencyDollar size={32} className={styles.colorTwo} />Pagamento</span>
                       <span className={styles.mapBoxSpan}>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    </div>
                </div> 
                       
                <div className={styles.credCard}>
                        <div className={styles.cards}>
                            <span className={styles.cardsCenter}><CreditCard  size={32} className={styles.colorTwo}  />CARTÃO CRÉDITO</span>
                        </div>
                        <div className={styles.cards}>
                            <span className={styles.cardsCenter}><Bank size={32} className={styles.colorTwo}  />CARTÃO DE DÉBITO</span>
                        </div>
                        <div className={styles.cards}>
                            <span className={styles.cardsCenter}><Money size={32} className={styles.colorTwo}  />DINHEIRO</span>
                        </div>
                </div>
            </section>
        </section>
        <CardsSelect selectedCoffees={selectedCoffees} removeCoffee={removeCoffee}/>

    </section>

    )
}



