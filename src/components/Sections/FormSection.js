import { useState } from "react";

import SectionTitle from "./SectionTitle";

import sectionStyles from "./css/section.module.css";
import styles from "./css/FormSection.module.css";

class Suggestion {
  constructor() {
    this.name = "";
    this.college_id = "";
    this.e_mail = "";
    this.phone_number = "";
  }
}

const FormSection = ({title, bgColor = "black", fgColor = "white", bgColorTitle = "white", fgColorTitle = "black", cards}) => {
  const [suggestion, setSuggestion] = useState(new Suggestion());

  const handleSubmit = e => {
    e.preventDefault();
    alert("Backend Coming Soon");
  }

  return(
    <div
      id="register"
      //className={title ? sectionStyles.sectionWithTitle : sectionStyles.section}
      className={styles.sectionWithTitle}
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
        <div className={styles.container}>
          <img src="/images/quates.jpg" alt="Quates Poster"/>
        </div>

        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              Name:
              <input
                value={suggestion.name}
                onChange={e => setSuggestion(i => ({...i, "name": e.target.value}))}
              />
            </label>

            <label>
              College ID:
              <input
                value={suggestion.college_id}
                onChange={e => setSuggestion(i => ({...i, "college_id": e.target.value}))}
              />
            </label>

            <label>
              E-Mail:
              <input
                value={suggestion.e_mail}
                onChange={e => setSuggestion(i => ({...i, "e_mail": e.target.value}))}
              />
            </label>

            <label>
              Phone:
              <input
                value={suggestion.phone_number}
                onChange={e => setSuggestion(i => ({...i, "phone_number": e.target.value}))}
              />
            </label>

            <div className={styles.buttonWrapper}>
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>

       
      </div>
    </div>
  );
}

export default FormSection;
