import React, { useState } from 'react'; 
import Ilustration  from "../../assets/Illustration.svg"
import styles from "./SuccessOrder.module.css";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";

export const SuccessOrder = ({onConfirmOrder}) => {

        return (
        
                <section className={styles.containerSuccess}>
                    <div className={styles.boxSuccess}>
                        <div className={styles.orderConfirm}>
                                <div className={styles.boxOne}>
                                    <h1 className={styles.orderConfirmTitle}>Uhu! Pedido confirmado</h1>
                                    <p className={styles.OrdeConfirmP}>Agora é só aguardar que logo o café chegará até você</p>
                                </div>
                                <div className={styles.boxConfirm}>
                                    <div className={styles.containerDeliverySuccess}>
                                    <div className={styles.SuccessIcons}>
                                        <MapPin size={32} className={styles.SuccessIconsPurple} />
                                        <div className={styles.BoxSuccessCards}>
                                            <p>Entrega em Rua <span className={styles.SuccessSpan}>João Daniel Martinelli</span>, 102</p>
                                            <span>Farrapos - Porto Alegre, RS</span>
                                        </div>
                                    </div>
                                    <div className={styles.SuccessIcons}>
                                        <Timer size={32} className={styles.successIconsOrange}/>
                                        <div className={styles.BoxSuccessCards}>
                                            <p>Previsão de entrega</p>
                                            <span className={styles.SuccessSpan}>20 min - 30 min</span>
                                        </div>
                                    </div>
                                    <div className={styles.SuccessIcons}>
                                        <CurrencyDollar size={32} className={styles.successIconsYellow}/>
                                        <div className={styles.BoxSuccessCards}>
                                            <p>Pagamento na entrega</p>
                                            <span className={styles.SuccessSpan}>Cartão de Crédito</span>
                                        </div>
                                    </div>
                            
                            </div>
                        </div>
                        
                        
                    </div>
                        
                        <div className={styles.successImage}>
                            <img src={Ilustration} alt="" />
                        </div>
                    </div>
                 
                </section>
                
        )
}
