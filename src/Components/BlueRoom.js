import React from "react";
import PrincipalBlueRoom from "../assets/images/PrincipalBlueRoom.jpg";
import Dresser from "../assets/images/DresserBlueRoom.jpg";
import Door from "../assets/images/DoorBR.jpg";
import closet from "../assets/images/ClosetBR.jpg";
import Desk from "../assets/images/DeskBR.jpg";
import bathroom from "../assets/images/bathroom.jpg";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
import CommentsArea from "./CommetsAreaBlueRoom";
import "./BlueRoom.css";

export default function BlueRoom() {
  return (
    <div>
      <div>
        <div className="title" style={{ backgroundColor: "#DAD9D9" }}>
          <h3 className="T">BlueRoom</h3>
        </div>
        <div className="body">
          <div className="imgs">
            <img
              clasname="pricipalBlue"
              src={PrincipalBlueRoom}
              alt="principalBlue"
              style={{
                width: "15.5rem",
                height: "25.5rem",
                margin: "0 0.5rem 1rem 0.5rem ",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            ></img>
            <img
              clasname="deskBlueRoom"
              src={Desk}
              alt="deskBlueRoom"
              style={{
                width: "15.5rem",
                height: "25.5rem",
                margin: "0 0.5rem 1rem 0.5rem ",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            ></img>
            <img
              clasname="dresserBlueRoom"
              src={Dresser}
              alt="dresserBlueRoom"
              style={{
                width: "15.5rem",
                height: "25.5rem",
                margin: "0 0.5rem 1rem 0.5rem ",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            ></img>
            <img
              clasname="doorBlueRoom"
              src={Door}
              alt="doorBlueRoom"
              style={{
                width: "15.5rem",
                height: "25.5rem",
                margin: "0 0.5rem 1rem 0.5rem ",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            ></img>
            <img
              clasname="closetBlueRoom"
              src={closet}
              alt="closetBlueRoom"
              style={{
                width: "15.5rem",
                height: "25.5rem",
                margin: "0.5rem 0.5rem 1rem 0.5rem ",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
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
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            ></img>
          </div>
          <div className="areaDescription">
            <div className="description">
              <h3 className="price">300€/month</h3>
              <p>
                Room for rent in apartment with elevator in front of the
                Ministries, in an area with a lot of atmosphere and bars of
                young people. It is 15 minutes walk from the station, 20 from
                the center and 5 from the Jewish quarter.
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
              id="BlueRoomAdd"
              to="/Profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <button class="btn">I LIKE IT!!</button>
            </Link>
          </div>

          <div className="commentsArea">
            <CommentsArea />
          </div>
          <div className="moreInfo">
            <p className="pMoreInfo">
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
    </div>
  );
}
