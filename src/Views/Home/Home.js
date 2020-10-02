import React from "react";
import GrayRoomPicture from "../../assets/images/ROOMS/GR/PrincipalGrayRoom.jpg";
import BlueRoomPicture from "../../assets/images/ROOMS/BR/PrincipalBlueRoom.jpg";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.GrayRoom}>
        <div className={styles.GrayRoomTitle}>
          <h3 className={styles.GrayRoomT}>GrayRoom</h3>
        </div>
        <div className={styles.GrayRoomArea}>
          <Link
            id="GrayRoom"
            to="/GrayRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className={styles.GrayRoomPicture}
              src={GrayRoomPicture}
              alt="GrayRoomPicture"
            />
          </Link>
          <Link
            id="GrayRoomAdd"
            to="/Profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className={styles.RoomAdd}>I LIKE IT!!</button>
          </Link>
          <div className={styles.RoomComments}>
            <div className={styles.users}>
              <AccountCircleOutlinedIcon />
            </div>
            <p className={styles.comments}>
              My name is Ileana, I'm a Ecuatorian woman and spent a great time
              during my time here, 3 years ago.
            </p>
          </div>
          {/* // La zona de comentarios deberá de estar conectada con la zona de
            comentarios de la página de GrayRoom // */}

          <Link
            id="GrayRoom"
            to="/GrayRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className={styles.RooMoreInf}>More Information</button>
          </Link>
        </div>
      </div>
      <div className={styles.BlueRoom}>
        <div
          className={styles.BlueRoomTitle}
          style={{ backgroundColor: "#DAD9D9" }}
        >
          <h3 className={styles.BlueRoomT}>BlueRoom</h3>
        </div>
        <div className={styles.BlueRoomArea}>
          <Link
            id="BlueRoom"
            to="/BlueRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className={styles.BlueRoomPicture}
              src={BlueRoomPicture}
              alt="BlueRoomPicture"
            />
          </Link>
          <Link
            id="BlueRoomAdd"
            to="/Profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className={styles.RoomAdd}>I LIKE IT!!</button>
          </Link>

          <div className={styles.RoomComments}>
            <div className={styles.users}>
              <AccountCircleOutlinedIcon />
            </div>
            <p className={styles.comments}>
              My name is Katty, I spent a great time in this flat during my
              Erasmus, 2 years ago. Pascual and Felipe are wonderful roommates.
            </p>
          </div>
          {/* // Aquí irán algunos de los comentarios de la pagina de BlueRoom // */}

          <Link
            id="BlueRoom"
            to="/BlueRoom"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className={styles.RooMoreInf}>More Information</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
