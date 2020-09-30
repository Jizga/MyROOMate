import React from "react";
import GrayRoomPicture from "../assets/images/PrincipalGrayRoom.jpg";
import BlueRoomPicture from "../assets/images/PrincipalBlueRoom.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="GrayRoom">
        <div className="GrayRoomTitle" style={{ backgroundColor: "#DAD9D9" }}>
          <h3 className="GrayRoomT">GrayRoom</h3>
        </div>
        <div className="GrayRoomArea">
          <Link
            id="GrayRoom"
            to="/GrayRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="GrayRoomPicture"
              src={GrayRoomPicture}
              alt="GrayRoomPicture"
            />
          </Link>
          <Link
            id="GrayRoomAdd"
            to="/Profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button class="RoomAdd">I LIKE IT!!</button>
          </Link>
          <Link
            id="GrayRooComments"
            to="/CommetsAreaGrayRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="RoomComments">Comments Area</div>
            {/* // La zona de comentarios deberá de estar conectada con la zona de
            comentarios de la página de GrayRoom // */}
          </Link>
          <Link
            id="GrayRoom"
            to="/GrayRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button class="RooMoreInf">More Information</button>
          </Link>
        </div>
      </div>
      <div className="BlueRoom">
        <div className="BlueRoomTitle" style={{ backgroundColor: "#DAD9D9" }}>
          <h3 className="BlueRoomT">BlueRoom</h3>
        </div>
        <div
          className="BlueRoomArea"
          style={{
            width: "30rem",
            height: "40rem",
            backgroundColor: "#C4C4C4",
          }}
        >
          <Link
            id="BlueRoom"
            to="/BlueRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="BlueRoomPicture"
              src={BlueRoomPicture}
              alt="BlueRoomPicture"
              style={{ width: "15rem", height: "25rem" }}
            />
          </Link>
          <Link
            id="BlueRoomAdd"
            to="/Profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button class="RoomAdd">I LIKE IT!!</button>
          </Link>
          <Link
            id="BlueRooComments"
            to="/CommetsAreaBlueRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="RoomComments">Comments Area</div>
            {/* // Aquí irán algunos de los comentarios de la pagina de BlueRoom // */}
          </Link>
          <Link
            id="BlueRoom"
            to="/BlueRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button class="RooMoreInf">More Information</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
