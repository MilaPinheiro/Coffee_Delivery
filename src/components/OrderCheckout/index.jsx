import React, { useState } from 'react'; 
import { CardsSelect } from "../CardsSelect";
import { SuccessOrder } from "../SuccessOrder"

import styles from "./orderCheckout.module.css"
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";


export function OrderCheckout({ setSelectedCoffees, selectedCoffees, onConfirmOrder,
    removeCoffee, updateCoffeeQuantity, onSelectCoffee}) { 

    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);


    const [addressData, setAddressData] = useState({
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        complemento: '',
        cidade: '',
        uf: ''
    });

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const handleConfirmOrder = () => {
        if (selectedCoffees.length > 0 && addressIsValid() && selectedPaymentMethod) {
            setIsOrderConfirmed(true);
        } 
    };

    const addressIsValid = () => {
        return addressData.cep && addressData.rua && addressData.numero && addressData.bairro && addressData.cidade && addressData.uf;
    };

    const handleAddressInputChange = (fieldName, value) => {
        setAddressData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };

    return (

    <>
    {isOrderConfirmed ? 
         <SuccessOrder onConfirmOrder={onConfirmOrder} selectedPaymentMethod={selectedPaymentMethod} addressData={addressData}/> : (
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
                        <input type="text" 
                            className={styles.inputBox1}   
                            placeholder="CEP" 
                            value={addressData.cep}
                            onChange={e => handleAddressInputChange('cep', e.target.value)}
                        />

                        <input
                            type="text"  
                            className={styles.inputBox} 
                            placeholder="Rua"
                            value={addressData.rua}
                            onChange={e => handleAddressInputChange('rua', e.target.value)}
                        />
                    </div>
                    <div  className={styles.containerAddress}>
                       <div className={styles.home}>
                            <input type="text" 
                                className={styles.inputBox}  
                                placeholder="Número"  
                                value={addressData.numero}
                                onChange={e => handleAddressInputChange('numero', e.target.value)}
                                />
                                
                                <input type="text" 
                                className={styles.inputBox}  
                                placeholder="Bairro"
                                value={addressData.bairro}
                                onChange={e => handleAddressInputChange('bairro', e.target.value)}
                                />
                       </div>

                        <div className={styles.containerCity}>
                            <div className={styles.box1}>
                                <input type="text" 
                                    className={styles.inputBox}  
                                    placeholder="Complemento" 
                                    value={addressData.complemento}
                                    onChange={e => handleAddressInputChange('complemento', e.target.value)}
                                />
                            </div>
                            <div className={styles.box2}>
                                <input type="text"
                                    className={`${styles.inputBox} ${styles.city}`} 
                                    placeholder="Cidade"
                                    value={addressData.cidade}
                                    onChange={e => handleAddressInputChange('cidade', e.target.value)}
                                  />
                                <input type="text" 
                                className={`${styles.inputBox} ${styles.inputUf}`}    
                                 placeholder="UF"
                                 value={addressData.uf}
                                 onChange={e => handleAddressInputChange('uf', e.target.value)}
                                 />
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
                        <div className={`${styles.cards} ${selectedPaymentMethod === 'CARTÃO CRÉDITO' ? styles.selected : ''}`}
                         onClick={() => setSelectedPaymentMethod('CARTÃO CRÉDITO')}>
                            <span className={styles.cardsCenter}><CreditCard  size={32} className={styles.colorTwo}  />CARTÃO CRÉDITO</span>
                        </div>
                        <div className={`${styles.cards} ${selectedPaymentMethod === 'CARTÃO DE DÉBITO' ? styles.selected : ''}`}
                         onClick={() => setSelectedPaymentMethod('CARTÃO DE DÉBITO')}>
                            <span className={styles.cardsCenter}><Bank size={32} className={styles.colorTwo}  />CARTÃO DE DÉBITO</span>
                        </div>
                        <div className={`${styles.cards} ${selectedPaymentMethod === 'DINHEIRO' ? styles.selected : ''}`}
                         onClick={() => setSelectedPaymentMethod('DINHEIRO')}>
                            <span className={styles.cardsCenter}><Money size={32} className={styles.colorTwo}  />DINHEIRO</span>
                        </div>
                </div>
            </section>
        </section>
        <CardsSelect 
            selectedCoffees={selectedCoffees} 
            setSelectedCoffees={setSelectedCoffees} 
            removeCoffee={removeCoffee} 
            onConfirmOrder={handleConfirmOrder}
            updateCoffeeQuantity={updateCoffeeQuantity}
            selectedPaymentMethod={selectedPaymentMethod}
            addressData={addressData}
        />

    </section>
    )}
 </>
)
}



