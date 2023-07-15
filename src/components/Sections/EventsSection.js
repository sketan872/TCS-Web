import SectionTitle from "./SectionTitle";

import sectionStyles from "./css/section.module.css";
import styles from "./css/EventsSection.module.css";

const EventsSection = ({title, bgColor, fgColor, bgColorTitle, fgColorTitle}) => {
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
      </div>
    </div>
  );
}

export default EventsSection;
