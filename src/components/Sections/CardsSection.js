import SectionTitle from "./SectionTitle";

import sectionStyles from "./css/section.module.css";
import styles from "./css/CardsSection.module.css";

const CardsSection = ({title, bgColor, fgColor, bgColorTitle, fgColorTitle, cards}) => {
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
