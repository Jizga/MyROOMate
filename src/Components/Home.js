import React from "react";
import GrayRoomPicture from "../assets/images/PrincipalGrayRoom.jpg";
import BlueRoomPicture from "../assets/images/PrincipalBlueRoom.jpg";

export default function Home() {
  return (
    <div>
      <div className="GrayRoom">
        <div className="GrayRoomTitle" style={{ backgroundColor: "#DAD9D9" }}>
          <a
            id="GrayRoom"
            href="#GrayRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3 className="GrayRoom">GrayRoom</h3>
          </a>
        </div>
        <div
          className="GrayRoomArea"
          style={{
            width: "20rem",
            height: "30rem",
            backgroundColor: "#C4C4C4",
          }}
        >
          <a
            id="GrayRoom"
            href="#GrayRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="GrayRoomPicture"
              src={GrayRoomPicture}
              alt="GrayRoomPicture"
              style={{ width: "12rem", height: "20rem" }}
            />
          </a>
          <a
            id="GrayRooMoreImg"
            href="#GrayRoomPictures"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="RooMoreImg">More pictures</button>
          </a>
          <a
            id="GrayRooComments"
            href="#GrayRoomCommentsArea"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="RoomComments">Comments Area</div>
          </a>
          <a
            id="GrayRooMoreInf"
            href="#GrayRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="RooMoreInf">More Information</button>
          </a>
          <a
            id="GrayRooAdd"
            href="#Profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="RoomAdd">I LIKE IT!!</button>
          </a>
        </div>
      </div>
      <div className="BlueRoom">
        <div className="BlueRoomTitle" style={{ backgroundColor: "#DAD9D9" }}>
          <a
            id="BlueRoom"
            href="#BlueRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3 className="BlueRoom">BlueRoom</h3>
          </a>
        </div>
        <div
          className="BlueRoomArea"
          style={{
            width: "20rem",
            height: "30rem",
            backgroundColor: "#C4C4C4",
          }}
        >
          <a
            id="BlueRoom"
            href="#BlueRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="BlueRoomPicture"
              src={BlueRoomPicture}
              alt="BlueRoomPicture"
              style={{ width: "12rem", height: "20rem" }}
            />
          </a>
          <a
            id="BlueRooMoreImg"
            href="#BlueRoomPictures"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="RooMoreImg">More pictures</button>
          </a>
          <a
            id="BlueRooComments"
            href="#BlueRoomCommentsArea"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="RoomComments">Comments Area</div>
          </a>
          <a
            id="BlueRooMoreInf"
            href="#BlueRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="RooMoreInf">More Information</button>
          </a>
          <a
            id="BlueRooAdd"
            href="#Profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="RoomAdd">I LIKE IT!!</button>
          </a>
        </div>
      </div>
    </div>
  );
}
