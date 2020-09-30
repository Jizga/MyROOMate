import React from "react";
import User from "../assets/images/user.png";
import email from "../assets/images/email.png";
import mobile from "../assets/images/telefono-inteligente.png";
import country from "../assets/images/country.png";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <div className="title" style={{ backgroundColor: "#DAD9D9" }}>
        <h3 className="T">Your Personal Area</h3>
      </div>
      <div className="body">
        <img className="user" src={User} alt="user" />
        <div className="profile">
          <div className="titleProfile">Profile</div>
          <div className="fullName">
            Full Name
            <input className="fullN" />
          </div>
          <div className="email">
            <img className="email" src={email} alt="email" />
            <input className="email" />
          </div>
          <div className="mobile">
            <img className="mobile" src={mobile} alt="mobile" />
            <input className="mobile" />
          </div>
          <div className="country">
            <img className="country" src={country} alt="country" />
            <input className="country" />
          </div>
          <div className="years">
            Years Old
            <input className="years" />
          </div>
          <div className="history">
            Tell us a little about you
            <input className="history" />
          </div>
        </div>
      </div>
    </div>
  );
}
