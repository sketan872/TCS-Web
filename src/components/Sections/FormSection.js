import { useState, useEffect } from "react";

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
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [submitPermaDisabled, setSubmitPermaDisabled] = useState(false);

  useEffect(_ => {
    let disabled = submitPermaDisabled;

    if (data.name.trim() === "") disabled = true;
    if (data.college_id.trim() === "") disabled = true;
    if (data.e_mail.trim() === "") disabled = true;
    if (data.phone_number.trim().length < 10) disabled = true;

    setSubmitDisabled(disabled);
  }, [data, setSubmitDisabled, submitPermaDisabled])

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitPermaDisabled(true)

    saveRegistration(data,
      _data => {
        if (_data.message === "success") {
          alert("thank you for your registration")
        } else {
          alert(`Error: ${_data.error}`)
          setSubmitPermaDisabled(false)
        }
      },
      err => {
        console.log(err)
        alert(err.error)
        setSubmitPermaDisabled(false)
      }
    );
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
          <img src="/images/quates.png" alt="Quates Poster"/>
        </div>

        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              Name:
              <input
                type="text"
                value={data.name}
                onChange={e => setData(i => ({...i, "name": e.target.value}))}
              />
            </label>

            <label>
              College ID:
              <input
                type="text"
                value={data.college_id}
                onChange={e => setData(i => ({...i, "college_id": e.target.value}))}
              />
            </label>

            <label>
              E-Mail:
              <input
                type="email"
                value={data.e_mail}
                onChange={e => setData(i => ({...i, "e_mail": e.target.value}))}
              />
            </label>

            <label>
              Phone:
              <input
                type="tel"
                value={data.phone_number}
                onChange={e => setData(i => ({...i, "phone_number": e.target.value}))}
              />
            </label>

            <div className={styles.buttonWrapper}>
              <input type="submit" value="Register" disabled={submitDisabled} />
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default FormSection;
