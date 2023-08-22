import { useState } from "react";

import { saveRegistration } from "./../../getters";
import SectionTitle from "./SectionTitle";

import styles from "./css/FormSection.module.css";

class Registration {
  constructor() {
    this.name = "";
    this.college_id = "";
    this.e_mail = "";
    this.phone_number = "";
  }
}

const FormSection = ({title, bgColor = "black", fgColor = "white", bgColorTitle = "white", fgColorTitle = "black", cards}) => {
  const [data, setData] = useState(new Registration());

  const handleSubmit = e => {
    e.preventDefault();

    saveRegistration(data,
      _data => {
        console.log(_data);
        alert("thank you for your registration")
      },
      err => {
        console.log(err)
        alert("an error occoured")
      }
    );
  }

  return(
    <div
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
                value={data.name}
                onChange={e => setData(i => ({...i, "name": e.target.value}))}
              />
            </label>

            <label>
              College ID:
              <input
                value={data.college_id}
                onChange={e => setData(i => ({...i, "college_id": e.target.value}))}
              />
            </label>

            <label>
              E-Mail:
              <input
                value={data.e_mail}
                onChange={e => setData(i => ({...i, "e_mail": e.target.value}))}
              />
            </label>

            <label>
              Phone:
              <input
                value={data.phone_number}
                onChange={e => setData(i => ({...i, "phone_number": e.target.value}))}
              />
            </label>

            <div className={styles.buttonWrapper}>
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>

        <div className={styles.container}>
            <div className={styles.headings}>
            <h1>rules</h1>  
            </div> 
            <div className={styles.lines}>
            <p>HELO FJAJLJ FKJ S LJKSDMKL JSDJJ AJKLFJAKLJ KLJ</p>  
            </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
