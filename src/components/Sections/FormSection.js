import { getDatabase, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { app } from "../../firebase";
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
}) => {
  const [data, setData] = useState(new Registration());
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [submitPermaDisabled, setSubmitPermaDisabled] = useState(false);

  useEffect(() => {
    const disabled = !(
      data.name.trim() &&
      data.college_id.trim() &&
      data.e_mail.trim() &&
      data.phone_number.trim().length >= 10
    );
    setSubmitDisabled(disabled);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitPermaDisabled(true);

    const userRef = push(ref(db, 'members'));
    set(userRef, data)
      .then(() => {
        console.log('Data saved successfully!');
        toast.success('Registration successful!');
        setData(new Registration());
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        toast.error('Failed to save registration data.');
      })
      .finally(() => {
        setSubmitPermaDisabled(false);
      });
  };

  return (
    <div
      id="register"
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
            src="/images/registerform.png"
            alt="Registration Form"
          />
        </div>

        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              Name:
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
              />
            </label>

            <label>
              College ID:
              <input
                type="text"
                value={data.college_id}
                onChange={(e) => setData((prev) => ({ ...prev, college_id: e.target.value }))}
              />
            </label>

            <label>
              E-Mail:
              <input
                type="email"
                value={data.e_mail}
                onChange={(e) => setData((prev) => ({ ...prev, e_mail: e.target.value }))}
              />
            </label>

            <label>
              Phone:
              <input
                type="tel"
                value={data.phone_number}
                onChange={(e) => setData((prev) => ({ ...prev, phone_number: e.target.value }))}
              />
            </label>

            <div className={styles.radioLabel}>
              <span onClick={() => setData((prev) => ({ ...prev, year: "1" }))}>
                <input
                  type="radio"
                  value="1"
                  checked={data.year === "1"}
                />{" "}
                1st Year
              </span>
              <span onClick={() => setData((prev) => ({ ...prev, year: "2" }))}>
                <input
                  type="radio"
                  value="2"
                  checked={data.year === "2"}
                />{" "}
                2nd Year
              </span>
            </div>

            <div className={styles.radioLabel}>
              <span onClick={() => setData((prev) => ({ ...prev, branch: "CE" }))}>
                <input
                  type="radio"
                  value="CE"
                  checked={data.branch === "CE"}
                />{" "}
                CE
              </span>
              <span onClick={() => setData((prev) => ({ ...prev, branch: "EC" }))}>
                <input
                  type="radio"
                  value="EC"
                  checked={data.branch === "EC"}
                />{" "}
                EC
              </span>
            </div>

            <div className={styles.buttonWrapper}>
              <input
                type="submit"
                value="Register"
                disabled={submitDisabled || submitPermaDisabled}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
