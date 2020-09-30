import React from "react";
import PrincipalGrayRoom from "../assets/images/PrincipalGrayRoom.jpg";
import Dresser from "../assets/images/comodaGrayRoom.jpg";
import Door from "../assets/images/puertaGrayRoom.jpg";
import Shelves from "../assets/images/estanteria GrayRoom.jpg";
import Desk from "../assets/images/MesaGrayRoom.jpg";
import bathroom from "../assets/images/bathroom.jpg";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "./GrayRoom.css";

export default function GrayRoom() {
  return (
    <div>
      <div className="title" style={{ backgroundColor: "#DAD9D9" }}>
        <h3 className="T">GrayRoom</h3>
      </div>
      <div className="body">
        <div className="imgs" style={{ gridColumn: "1 / 3" }}>
          <img
            clasname="pricipalGray"
            src={PrincipalGrayRoom}
            alt="principalGray"
            style={{
              width: "15.5rem",
              height: "25.5rem",
              margin: "0 0.5rem 1rem 0.5rem ",
            }}
          ></img>
          <img
            clasname="deskGrayRoom"
            src={Desk}
            alt="deskGrayRoom"
            style={{
              width: "15.5rem",
              height: "25.5rem",
              margin: "0 0.5rem 1rem 0.5rem ",
            }}
          ></img>
          <img
            clasname="dresserGrayRoom"
            src={Dresser}
            alt="dresserGrayRoom"
            style={{
              width: "15.5rem",
              height: "25.5rem",
              margin: "0 0.5rem 1rem 0.5rem ",
            }}
          ></img>
          <img
            clasname="doorGrayRoom"
            src={Door}
            alt="doorGrayRoom"
            style={{
              width: "15.5rem",
              height: "25.5rem",
              margin: "0 0.5rem 1rem 0.5rem ",
            }}
          ></img>
          <img
            clasname="shelvesGrayRoom"
            src={Shelves}
            alt="shelvesGrayRoom"
            style={{
              width: "15.5rem",
              height: "25.5rem",
              margin: "0.5rem 0.5rem 1rem 0.5rem ",
            }}
          ></img>
          <img
            clasname="bathroom"
            src={bathroom}
            alt="bathroom"
            style={{
              width: "15.5rem",
              height: "25.5rem",
              margin: "0.5rem 0.5rem 1rem 0.5rem ",
            }}
          ></img>
        </div>
        <div
          className="areaDescription"
          style={{
            backgroundColor: "#C4C4C4",
            width: "20rem",
            height: "40rem",
            gridColumn: "3 / 4",
            gridRow: "1 / 3",
          }}
        >
          <p className="description">
            Room for rent in apartment with elevator in front of the Ministries,
            in an area with a lot of atmosphere and bars of young people. It is
            15 minutes walk from the station, 20 from the center and 5 from the
            Jewish quarter. The price includes electricity, water, internet,
            community, cleaning of common areas and a bathroom for two people.
            The room has a double bed, a large table, a lot of storage area,
            ceiling fan, stove and a large window that provides plenty of light.
            The bathroom to share between two has a radiator and a dryer for
            tenants. The kitchen is fully equipped (dishwasher, washing machine,
            microwave, coffee maker, toaster, oven and fryer). Preferably
            students or person up to 30 - 35 years old.
            {"          "}
            <button className="btn">I LIKE IT!!</button>
          </p>
        </div>

        <div
          className="commentsArea"
          style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
        >
          Comments Area
        </div>
        <div
          className="moreInfo"
          style={{
            backgroundColor: "#C4C4C4",
            gridColumn: "3 / 4",
            gridRow: "5",
          }}
        >
          <p>
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
