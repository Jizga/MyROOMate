import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import "./CommentsAreaBlueRoom.css";

export default function CommetsAreaBlueRoom() {
  return (
    <div>
      <div className="commentsAreaBR">
        <div className="userBR">
          <AccountCircleOutlinedIcon />
        </div>
        <p className="commentBR">
          My name is Cornelia, I'm a Germany woman and spent a great time during
          my Erasmus here, 3 years ago.
        </p>
        <div className="userBR">
          <AccountCircleOutlinedIcon />
        </div>
        <p className="commentBR">
          My name is Katy and spent a great time in this flat during my Erasmus,
          2 years ago. Pascual and Felipe are wonderful roommates.
        </p>
        <div className="userBR">
          <AccountCircleOutlinedIcon />
        </div>
        <p className="commentBR">
          My name is Víctor, I'm a Chilean man. I spent a great Erasmus time in
          this flat.
        </p>
        <div className="userBR">
          <AccountCircleOutlinedIcon />
        </div>
        <p className="commentBR">
          My name is Rolando, I spent all COVID living with Pascual and Felipe
          and I can only say that they are best roommates.
        </p>
      </div>
    </div>
  );
}
