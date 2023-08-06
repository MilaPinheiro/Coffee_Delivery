import { useState } from "react";
import Logo from "./assets/Logo.svg";
import IconHeader from "./assets/IconHeader.svg";
import Location from "./assets/Location.svg";
import Coffe from "./assets/Coffe.svg";
import Icon from "./assets/icon.svg";
import IconOne from "./assets/Icon1.svg";
import IconTwo from "./assets/Icon2.svg";
import IconThree from "./assets/Icon3.svg";
import Coffee from "./assets/Coffee.svg";
import IconButton from "./assets/IconButton.svg";
import IconPurple1 from "./assets/iconpurple1.svg";
import IconPurple2 from "./assets/iconpurple2.svg";

function App() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <img className="imgLogo" src={Logo} />
          <div className="location">
            <p>
              <img src={Location} />
              Vinhedo,SP
            </p>
            <img className="imgLocation" src={IconHeader} />
          </div>
        </div>
      </header>
      <section>
        <div className="container-section">
          <div className="container-section-one">
            <div className="container-section-one-container-divs">
              <div className="container-section-one-container">
                <h1 className="container-section-one-title">
                  Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p className="container-section-one-p">
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </p>

                <div className="icons">
                  <div className="container-icons">
                    <div className="container-icons-primary box">
                      <div className="container-icons-primary">
                        <div className="container-icons-primary-box2">
                          <p>
                            <img className="container-icons-img" src={Icon} />
                            Compra simples e segura
                          </p>
                        </div>
                        <div className="container-icons-primary-box2">
                          <p>
                            <img
                              className="container-icons-img light"
                              src={IconOne}
                            />
                            Entrega rápida e rastreada
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="container-icons-primary">
                      <div className="container-icons-primary-box2">
                        <p>
                          <img
                            className="container-icons-img gray"
                            src={IconTwo}
                          />
                          Embalagem mantém o café intacto
                        </p>
                      </div>
                      <div className="container-icons-primary-box2">
                        <p>
                          <img
                            className="container-icons-img purple"
                            src={IconThree}
                          />
                          O café chega fresquinho até você
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-coffe">
                <img src={Coffe} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="container-section-coffee">
          <h2 className="container-section-coffee-title">Nossos cafés</h2>
        </div>

        <div className="container-section-coffee-cards">
          <div className="container-section-coffee-card">
            <div className="container-section-coffee-card-img">
              <img src={Coffee} />
            </div>
            <div className="container-section-coffee-card-box">
              <h3>TRADICIONAL</h3>
              <p>Expresso Tradicional</p>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
            </div>
            <div className="container-section-coffee-card-box2">
              <p className="container-section-coffee-card-box2-p1"><span className="money">R$</span>9,90</p>
              <p className="container-section-coffee-card-box2-p2"><img src={IconPurple1} />1 <img src={IconPurple2}/></p>
              <img src={IconButton} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
