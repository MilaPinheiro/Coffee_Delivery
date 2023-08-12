import React, { useState } from "react";
import styles from "./orderCheckout.module.css"
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash } from "@phosphor-icons/react";
import IconPurple1 from "../../assets/iconpurple1.svg";
import IconPurple2 from "../../assets/iconpurple2.svg";

export function OrderCheckout() { 

    const [selectedCoffees, setSelectedCoffees] = useState([]);

    const selectCoffee = (coffeeId) => {
        if (selectedCoffees.includes(coffeeId)) {
          setSelectedCoffees(selectedCoffees.filter(id => id !== coffeeId));
        } else {
          setSelectedCoffees([...selectedCoffees, coffeeId]);
        }

        console.log(coffeeId);
      };


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

        <section className={styles.sectionTwo}>
            <div className={styles.containerSectionCoffee}>
                <h2 className={styles.containerSectionCoffeeTitle}>
                   Cafés selecionados
                </h2>
            </div>
            <div className={styles.containerSelect}>
                {selectedCoffees.map(coffeeId => {
                    const coffee = listCoffee.find(item => item.id === coffeeId);
                
                return (
                <div key={coffee.id} className={styles.containerSelectBox} >
                    <img src={coffee.image} />
                    <div className={styles.cardSelect}>
                        <div className={styles.cardExpress}>
                            <h3>{coffee.name}l</h3>
                            <p>{coffee.price}</p>
                        </div>
                        <div className={styles.cardRemove}>
                            <p className={styles.coffeeCardBox2P2}><img src={IconPurple1} />1 <img src={IconPurple2}/></p>
                            <span ><Trash size={32} className={styles.trash} />REMOVER</span>
                        </div>
                    </div>
                </div>
                );
            })}
            </div>
        </section>

    </section>

    )
}



