import { useEffect, useState } from "react";

import { getDatabase, ref, set } from "firebase/database";
import { toast } from "react-toastify";
import { app } from "../../firebase";
import { saveRegistration } from "./../../getters";
import styles from "./css/FormSection.module.css";
import SectionTitle from "./SectionTitle";
class Registration {
  constructor() {
    this.name = "";
    this.college_id = "";
    this.e_mail = "";
    this.phone_number = "";
    this.year = "1";
    this.branch = "CE";
  }
}

const db = getDatabase(app);

const FormSection = ({
  title,
  bgColor = "black",
  fgColor = "white",
  bgColorTitle = "white",
  fgColorTitle = "black",
  cards,
}) => {
  const [data, setData] = useState(new Registration());
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [submitPermaDisabled, setSubmitPermaDisabled] = useState(false);
const[counter,setCounter] = useState(0);
const register = () => {
  const newCounter = counter + 1; // Increment counter
  setCounter(newCounter); // Update state

  set(ref(db, `members/user${newCounter}`), data)
    .then(() => {
      console.log('Data saved successfully!');
      toast.success('Registration successful!');
    })
    .catch((error) => {
      console.error('Error saving data:', error);
      toast.error('Failed to save registration data.');
    });
};
  useEffect(
    (_) => {
      let disabled = submitPermaDisabled;

      if (data.name.trim() === "") disabled = true;
      if (data.college_id.trim() === "") disabled = true;
      if (data.e_mail.trim() === "") disabled = true;
      if (data.phone_number.trim().length < 10) disabled = true;

      setSubmitDisabled(disabled);
    },
    [data, setSubmitDisabled, submitPermaDisabled]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitPermaDisabled(true);

    saveRegistration(
      data,
      (_data) => {
        if (_data.message === "success") {
          toast("thank you for your registration");
          setData(new Registration());
        } else {
          toast(`Error: ${_data.error}`);
          setSubmitPermaDisabled(false);
        }
      },
      (err) => {
        console.log(err);
        toast(err.error);
        setSubmitPermaDisabled(false);
      }
    );
  };

  // console.log(data);

  return (
    <div
      id="register"
      //className={title ? sectionStyles.sectionWithTitle : sectionStyles.section}
      className={styles.sectionWithTitle}
      style={{
        backgroundColor: bgColor,
        color: fgColor,
      }}
    >
      {title && (
        <SectionTitle
          title={title}
          bgColor={bgColorTitle}
          fgColor={fgColorTitle}
        />
      )}

      <div className={styles.flex}>
        <div className={styles.container}>
          <img
            src="/images/registration-form-poster-04092022-new.jpg"
            alt="Quates Poster"
          />
        </div>

        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              Name:
              <input
                type="text"
                value={data.name}
                onChange={(e) =>
                  setData((i) => ({ ...i, name: e.target.value }))
                }
              />
            </label>

            <label>
              College ID:
              <input
                type="text"
                value={data.college_id}
                onChange={(e) =>
                  setData((i) => ({ ...i, college_id: e.target.value }))
                }
              />
            </label>

            <label>
              E-Mail:
              <input
                type="email"
                value={data.e_mail}
                onChange={(e) =>
                  setData((i) => ({ ...i, e_mail: e.target.value }))
                }
              />
            </label>

            <label>
              Phone:
              <input
                type="tel"
                value={data.phone_number}
                onChange={(e) =>
                  setData((i) => ({ ...i, phone_number: e.target.value }))
                }
              />
            </label>

            <div className={styles.radioLabel}>
              <span onClick={(_) => setData((i) => ({ ...i, year: "1" }))}>
                <input
                  type="radio"
                  value={data.year}
                  checked={data.year === "1"}
                />{" "}
                1st Year
              </span>
              <span onClick={(_) => setData((i) => ({ ...i, year: "2" }))}>
                <input
                  type="radio"
                  value={data.year}
                  checked={data.year === "2"}
                />{" "}
                2nd Year
              </span>
            </div>

            <div className={styles.radioLabel}>
              <span onClick={(_) => setData((i) => ({ ...i, branch: "CE" }))}>
                <input
                  type="radio"
                  value={data.branch}
                  checked={data.branch === "CE"}
                />{" "}
                CE
              </span>
              <span onClick={(_) => setData((i) => ({ ...i, branch: "EC" }))}>
                <input
                  type="radio"
                  value={data.branch}
                  checked={data.branch === "EC"}
                />{" "}
                EC
              </span>
            </div>

            <div className={styles.buttonWrapper}>
              <input
                type="submit"
                value="Register"
                onClick={register}
                disabled={submitDisabled}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
