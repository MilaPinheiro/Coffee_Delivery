import React, { useState } from "react";
import { listCoffee } from "../../data/listCoffe";
import { Coffee } from "../../components/Coffee";


import styles from "./home.module.css";
import Delivery from "../../assets/Delivery.svg";
import Icon from "../../assets/icon.svg";
import IconOne from "../../assets/Icon1.svg";
import IconTwo from "../../assets/Icon2.svg";
import IconThree from "../../assets/Icon3.svg";

export const HomePage = ({selectCoffee, selectedCoffees, incrementCoffe, decrementCoffe }) => {


  return (
    <>
      <section>
        <div className={styles.containerSection}>
          <div className={styles.containerSectionOne}>
            <div className={styles.containerDivs}>
              <div className={styles.sectionOneContainer}>
                <h1 className={styles.sectionOnetitle}>
                  Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p className={styles.sectionOne}>
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </p>

                <div className={styles.icons}>
                  <div className={styles.containerIcons}>
                    <div className={styles.sectionCoffeeCards}>
                      <div className={styles.containerIconsPrimary}>
                        <div className={styles.containerIconsPrimaryBox2}>
                          <p>
                            <img
                              className={styles.containerIconsImg}
                              src={Icon}
                            />
                            Compra simples e segura
                          </p>
                        </div>
                        <div className={styles.containerIconsPrimaryBox2}>
                          <p>
                            <img
                              className={`${styles.containerIconsImg} ${styles.light}`}
                              src={IconOne}
                            />
                           Embalagem mantém o café intacto
                          </p>
                        </div>
                      </div>
                      <div className={styles.containerIconsPrimary}>
                      <div className={styles.containerIconsPrimaryBox2}>
                        <p>
                          <img
                            className={`${styles.containerIconsImg} ${styles.gray}`}
                            src={IconTwo}
                          />
                           Entrega rápida e rastreada
                          
                        </p>
                      </div>
                      <div className={styles.containerIconsPrimaryBox2}>
                        <p>
                          <img
                            className={`${styles.containerIconsImg} ${styles.purple}`}
                            src={IconThree}
                          />
                          O café chega fresquinho até você
                        </p>
                      </div>
                    </div>
                    </div>

                  
                  </div>
                </div>
              </div>
              <div className={styles.containerCoffe}>
                <img src={Delivery} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.containerSectionCoffee}>
          <h2 className={styles.containerSectionCoffeeTitle}>
            Nossos cafés
          </h2>
        </div>
      </section>

      <div className="sectionCoffeeCards" >
        {listCoffee.map((coffee) => (
          <Coffee
            key={coffee.id}
            name={coffee.name}
            description={coffee.description}
            tags={coffee.tags}
            image={coffee.image}
            price={coffee.price}
            selectedCoffees={selectedCoffees}
            onSelectCoffee={() => selectCoffee(coffee.id)} 
          
          />
        ))}
  

      </div>
    </>
  );
};
