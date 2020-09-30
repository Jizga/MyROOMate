import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import "./CommentsAreaGrayRoom.css";

export default function CommetsAreaGrayRoom() {
  return (
    <div>
      <div className="commentsArea">
        <div className="user">
          <AccountCircleOutlinedIcon />
        </div>
        <p className="comment">
          My name is Ileana, I'm a Ecuatorian woman and spent a great time
          during my time here, 3 years ago.
        </p>
        <div className="user">
          <AccountCircleOutlinedIcon />
        </div>
        <p className="comment">
          My name is Samolé and spent a great time in this flat during my
          university time, 2 years ago. Pascual and Felipe are wonderful
          roommates.
        </p>
        <div className="user">
          <AccountCircleOutlinedIcon />
        </div>
        <p className="comment">
          My name is Inga, I'm a Germany woman. I spent a great Erasmus time in
          this flat. Pascul and Felipe are the best!!
        </p>
      </div>
    </div>
  );
}
