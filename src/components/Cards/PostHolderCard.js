import { Link } from "react-router-dom";
import styles from "./css/PostHolderCard.module.css";

const PostHolderCard = ({img, alt, title, subtitle}) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={alt}/>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
       
      </div>
      
    </div>
    
  );
}

export default PostHolderCard;
