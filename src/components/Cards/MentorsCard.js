import styles from "./css/MentorsCard.module.css";

const MentorsCard = ({img, alt, title, subtitle,subtitle1}) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={alt}/>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.subtitle1}>{subtitle1}</div>
      </div>
    </div>
  );
}

export default MentorsCard;
