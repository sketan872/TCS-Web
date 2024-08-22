// import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";


import styles from "./css/CardsSection.module.css";
import sectionStyles from "./css/section.module.css";

const CardsSection = ({title, bgColor = "black", fgColor = "white", bgColorTitle = "white", fgColorTitle = "black", cards}) => {
  return (
    <div
      className={title ? sectionStyles.sectionWithTitle : sectionStyles.section}
      style={{
        backgroundColor: bgColor,
        color: fgColor
      }}
    >
      {title &&
        <SectionTitle
          title={title}
          bgColor={bgColorTitle}
          fgColor={fgColorTitle} />
      }
      <div className={styles.flex}>
        {cards}
      </div>

    
    </div>
  );
}

export default CardsSection;
