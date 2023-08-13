import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.svg";
import styles from "./header.module.css";
import IconHeader from "../../assets/IconHeader.svg";
import Location from "../../assets/Location.svg";



export function Header() {

    return (
      <>
        <header>
          <div className={styles.headerContainer}>
            <Link to="/">
              <img className={styles.imgLogo} src={Logo} />
            </Link>
            <div className={styles.location}>
              <p>
                <img src={Location} />
                Vinhedo,SP
              </p>
              <Link to="/checkout">
                <img className={styles.imgLocation} src={IconHeader} />
              </Link>
            </div>
          </div>
      </header>
      </>

    )
}