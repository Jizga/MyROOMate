import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <div className="title" style={{ backgroundColor: "#DAD9D9" }}>
        <h3 className="T">Your Personal Area</h3>
      </div>
      <div className="body">
        <i icon={<AccountCircleOutlinedIcon />} />
      </div>
    </div>
  );
}
