import React from "react";
import User from "../../assets/images/Icons/user.png";
import email from "../../assets/images/Icons/email.png";
import mobile from "../../assets/images/Icons/telefono-inteligente.png";
import country from "../../assets/images/Icons/country.png";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div>
      <div className={styles.title}>
        <h3 className={styles.T}>Your Personal Area</h3>
      </div>
      <div className={styles.body}>
        <img className={styles.user} src={User} alt="user" />
        <div className={styles.profile}>
          <div className={styles.titleProfile}>Profile</div>
          <div className={styles.fullName}>
            Full Name
            <input className={styles.fullN} />
          </div>
          <div className={styles.email}>
            <img className={styles.email} src={email} alt="email" />
            <input className={styles.email} />
          </div>
          <div className={styles.mobile}>
            <img className={styles.mobile} src={mobile} alt="mobile" />
            <input className={styles.mobile} />
          </div>
          <div className={styles.country}>
            <img className={styles.country} src={country} alt="country" />
            <input className={styles.country} />
          </div>
          <div className={styles.years}>
            Years Old
            <input className={styles.years} />
          </div>
          <div className={styles.history}>
            Tell us a little about you
            <input className={styles.history} />
          </div>
        </div>
      </div>
    </div>
  );
}
