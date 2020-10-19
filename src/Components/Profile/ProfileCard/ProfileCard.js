import React from "react";
import User from "../../../assets/images/Icons/user.png";
import email from "../../../assets/images/Icons/email.png";
import mobile from "../../../assets/images/Icons/telefono-inteligente.png";
import country from "../../../assets/images/Icons/country.png";
import age from "../../../assets/images/Icons/AGE.png";
import { Link } from "react-router-dom";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div>
      <div className={styles.title}>
        <h3 className={styles.T}>Your Personal Area</h3>
      </div>
      <div className={styles.body}>
        <img className={styles.user} src={User} alt="user" />

        <div className={styles.titleProfile}>
          <Link
            id="userProfile"
            to="/Profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            Profile
          </Link>
        </div>
        <div className={styles.titleUserRoom}>
          <Link
            id="userRoom"
            to="/YourRoomCard"
            style={{ textDecoration: "none", color: "black" }}
          >
            Your Room
          </Link>
        </div>
        <div className={styles.titleUserData}>
          <Link
            id="userData"
            to="/AccessDataCard"
            style={{ textDecoration: "none", color: "black" }}
          >
            Acess Data
          </Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.fullName}>
            Full Name
            <input
              className={styles.fullN}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.email}>
            <img className={styles.emailImg} src={email} alt="email" />
            <input
              className={styles.emailInput}
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className={styles.mobile}>
            <img className={styles.mobileImg} src={mobile} alt="mobile" />
            <input
              className={styles.mobileInp}
              name="mobile"
              type="number"
              placeholder="Your Number Phone"
            />
          </div>
          <div className={styles.country}>
            <img className={styles.countryImg} src={country} alt="country" />
            <select
              id="dropdown"
              name="country"
              className={styles.countryInp}
              required
            >
              <option disabled selected value>
                Select your country
              </option>
              <option value="Spain">Spain</option>
              <option value="Portugal">Portugal</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Chile">Chile</option>
              <option value="Cuba">Cuba</option>
            </select>
          </div>
          <div className={styles.age}>
            <img className={styles.ageImg} src={age} alt="age" />
            <input
              className={styles.number}
              type="number"
              name="age"
              min="18"
              max="99"
              placeholder="Age"
            />
          </div>
          <div className={styles.history}>
            Tell us a little about you
            <textarea
              id="comments"
              className={styles.historyInp}
              name="comment"
              placeholder="Enter your comment here..."
            ></textarea>
          </div>
          <div>
            <button type="submit" id="submit" className={styles.submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
