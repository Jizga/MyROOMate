import React from "react";
import PrincipalGrayRoom from "../../assets/images/ROOMS/GR/PrincipalGrayRoom.jpg";
import Dresser from "../../assets/images/ROOMS/GR/comodaGrayRoom.jpg";
import Door from "../../assets/images/ROOMS/GR/puertaGrayRoom.jpg";
import Shelves from "../../assets/images/ROOMS/GR/estanteria GrayRoom.jpg";
import Desk from "../../assets/images/ROOMS/GR/MesaGrayRoom.jpg";
import bathroom from "../../assets/images/ROOMS/bathroom.jpg";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
import styles from "./GrayRoom.module.css";
import CommentsArea from "../../Components/GrayRoom/CommetsAreaGrayRoom";

export default function GrayRoom() {
  return (
    <div>
      <div className={styles.title}>
        <h3 className={styles.T}>GrayRoom</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.imgs}>
          <img
            className={styles.pricipalGray}
            src={PrincipalGrayRoom}
            alt="principalGray"
          />
          <img className={styles.deskGrayRoom} src={Desk} alt="deskGrayRoom" />
          <img
            className={styles.dresserGrayRoom}
            src={Dresser}
            alt="dresserGrayRoom"
          />
          <img className={styles.doorGrayRoom} src={Door} alt="doorGrayRoom" />
          <img
            className={styles.shelvesGrayRoom}
            src={Shelves}
            alt="shelvesGrayRoom"
          />
          <img className={styles.bathroom} src={bathroom} alt="bathroom" />
        </div>
        <div className={styles.areaDescription}>
          <div className={styles.description}>
            <h3 className={styles.price} style={{ fontWeight: "bold" }}>
              300€/month
            </h3>
            <p>
              Room for rent in apartment with elevator in front of the
              Ministries, in an area with a lot of atmosphere and bars of young
              people. It is 15 minutes walk from the station, 20 from the center
              and 5 from the Jewish quarter.
            </p>
            <p style={{ fontWeight: "bold" }}>
              The price includes electricity, water, internet, community,
              cleaning of common areas and a bathroom for two people.
            </p>
            <p>
              The room has a double bed, a large table, a lot of storage area,
              ceiling fan, stove and a large window that provides plenty of
              light.
            </p>
            <p>
              The bathroom to share between two has a radiator and a dryer for
              guests.
            </p>
            <p>
              The kitchen is fully equipped (dishwasher, washing machine,
              microwave, coffee maker, toaster, oven and fryer).
            </p>
            <p>Preferably students or person up to 30 - 35 years old.</p>
          </div>
          <Link
            id="GrayRoomAdd"
            to="/Profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className={styles.btnGR}>I LIKE IT!!</button>
          </Link>
        </div>
        <div className={styles.commentsArea}>
          <CommentsArea />
        </div>

        <div className={styles.moreInfo}>
          <p className={styles.pmoreInfo}>
            If you need more information, you can contact us by phone or email
          </p>
          <a id="whatsapp" href="tel:671751844">
            <BottomNavigationAction
              label="whatsapp"
              value="whatsapp"
              icon={<WhatsAppIcon />}
            />
          </a>
          <a id="email" href="mailto: jizga93@gmail.com">
            <BottomNavigationAction
              label="email"
              value="email"
              icon={<MailOutlineIcon />}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
