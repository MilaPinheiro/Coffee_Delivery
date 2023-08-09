import Logo from "../../assets/Logo.svg";
import styles from "./header.module.css";
import IconHeader from "../../assets/IconHeader.svg";
import Location from "../../assets/Location.svg";
import  Delivery from "../../assets/Delivery.svg";
import Icon from "../../assets/icon.svg";
import IconOne from "../../assets/Icon1.svg";
import IconTwo from "../../assets/Icon2.svg";
import IconThree from "../../assets/Icon3.svg";


export function Header() {

    return (
        <>
         <header>
        <div className={styles.headerContainer}>
          <img className={styles.imgLogo} src={Logo} />
          <div className={styles.location}>
            <p>
              <img src={Location} />
              Vinhedo,SP
            </p>
            <img className={styles.imgLocation} src={IconHeader} />
          </div>
        </div>
      </header>
      <section>
        <div className={styles['container-section']}>
          <div className={styles['container-section-one']}>
            <div className={styles['container-section-one-container-divs']}>
              <div className={styles['container-section-one-container']}>
                <h1 className={styles['container-section-one-title']}>
                  Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p className={styles['container-section-one-p']}>
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </p>

                <div className={styles.icons}>
                  <div className={styles['container-icons']}>
              
                  <div className={styles['container-section-coffee-cards']}>
                      <div className={styles['container-icons-primary']}>
                        <div className={styles['container-icons-primary-box2']}>
                          <p>
                            <img className={styles['container-icons-img']} src={Icon} />
                            Compra simples e segura
                          </p>
                        </div>
                        <div className={styles['container-icons-primary-box2']}>
                          <p>
                            <img
                              className={`${styles['container-icons-img']} ${styles.light}`}
                              src={IconOne}
                            />
                            Entrega rápida e rastreada
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={styles['container-icons-primary']}>
                      <div className={styles['container-icons-primary-box2']}>
                        <p>
                          <img
                            className={`${styles['container-icons-img']} ${styles.gray}`}
                            src={IconTwo}
                          />
                          Embalagem mantém o café intacto
                        </p>
                      </div>
                      <div className={styles['container-icons-primary-box2']}>
                        <p>
                          <img
                            className={`${styles['container-icons-img']} ${styles.purple}`}
                            src={IconThree}
                          />
                          O café chega fresquinho até você
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['container-coffe']}>
                <img src={Delivery} />
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section className={styles['section-two']}>
        <div className={styles['container-section-coffee']}>
            <h2 className={styles['container-section-coffee-title']}>Nossos cafés</h2>
          </div>
      </section>
        
      </>

    )
}