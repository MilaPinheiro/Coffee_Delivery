import Logo from "../../assets/Logo.svg";
import styles from "./header.module.css";
import IconHeader from "../../assets/IconHeader.svg";
import Location from "../../assets/Location.svg";



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
      </>

    )
}