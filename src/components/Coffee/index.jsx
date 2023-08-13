import styles from "./coffee.module.css";
import IconButton from "../../assets/IconButton.svg";
import IconPurple1 from "../../assets/iconpurple1.svg";
import IconPurple2 from "../../assets/iconpurple2.svg";


export function Coffee({id, name, description, tags, image, price, onSelectCoffee }) {
    
   
    return ( 

          <div className={styles.containerSectionCoffeeCard} >
            <div className={styles.sectionCoffeeCardImg}>
              <img src={image} />
            </div>
            <div className={styles.containerSectionCoffeeCardBox}>
            <div className={styles.tagsContainer}>
              {tags.map((tag) => (
                <h3 key={`${id}_${tag}`} title={tag}>
                  {tag.toUpperCase()}
                </h3>
              ))}
             </div>
              <p>{name}</p>
              <span>
                {description}
              </span>
            </div>
            <div className={styles.coffeeCardBox2}>
              <p className={styles.coffeeCardBox2P1}><span className={styles.money}>R$</span>{price}</p>
              <p className={styles.coffeeCardBox2P2}><img src={IconPurple1} />1 <img src={IconPurple2}/></p>
              <button onClick={onSelectCoffee}>
                <img src={IconButton} />
              </button>
            </div>
          </div>
          
    )
}

