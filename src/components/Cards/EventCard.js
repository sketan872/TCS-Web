import styles from "./css/EventCard.module.css";

const EventCard = ({img, alt, title, subtitle}) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={alt}/>
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}

export default EventCard;