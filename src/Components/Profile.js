import React from "react";
import User from "../assets/images/whiteUser.png";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <div className="title" style={{ backgroundColor: "#DAD9D9" }}>
        <h3 className="T">Your Personal Area</h3>
      </div>
      <div className="body">
        <img className="user" src={User} alt="user"></img>
      </div>
    </div>
  );
}
