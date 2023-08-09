import styles from "./coffees.module.css";
import IconButton from "../../assets/IconButton.svg";
import IconPurple1 from "../../assets/iconpurple1.svg";
import IconPurple2 from "../../assets/iconpurple2.svg";


export function Coffees({id, name, description, tags, image, price }) {
    

    return (

  
       <div className={styles['container-section-coffee-cards']}>
          <div className={styles['container-section-coffee-card']}>
            <div className={styles['container-section-coffee-card-img']}>
              <img src={image} />
            </div>
            <div className={styles['container-section-coffee-card-box']}>
              <h3>{tags}</h3>
              <p>{name}</p>
              <span>
                {description}
              </span>
            </div>
            <div className={styles['container-section-coffee-card-box2']}>
              <p className={styles['container-section-coffee-card-box2-p1']}><span className={styles.money}>R$</span>{price}</p>
              <p className={styles['container-section-coffee-card-box2-p2']}><img src={IconPurple1} />1 <img src={IconPurple2}/></p>
              <img src={IconButton} />
            </div>
          </div>
        </div>
  

    )
}