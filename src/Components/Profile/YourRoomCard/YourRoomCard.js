import React from "react";
import pay from "../../../assets/images/Icons/tarjeta-de-credito-y-factura.png";
import calendar from "../../../assets/images/Icons/calendar.png";
import RoomPictureImg from "../../../assets/images/ROOMS/GR/PrincipalGrayRoom.jpg";
import styles from "./YorRoomCard.module.css";

export default function YourRoomCard() {
  return (
    <div>
      <div className="YourRoom">
        <div className={styles.Room}>
          Room
          <input
            className={styles.RoomName}
            type="text"
            name="name"
            placeholder="Enter your Room Name"
            required
          />
          {/* // Lo suyo sería que el nombre de la habitación se añadiese automáticamente con el pago de la señal o al añadirla como favoritos// */}
        </div>
        <div className={styles.pay}>
          <h3 className={styles.payT}>Pay your room</h3>
          <img className={styles.payImg} src={pay} alt="pay" />
        </div>
        <div className={styles.calendar}>
          <h3 className={styles.calendarT}>Time with us</h3>
          <img className={styles.calendarImg} src={calendar} alt="calendar" />
          {/* // Al pinchar debería de abrirse el calendario de google para marcar la fecha de entrada y los pagos// */}
        </div>
        <div className={styles.RoomPicture}>
          <img
            className={styles.RoomPictureImg}
            src={RoomPictureImg}
            alt="RoomPicture"
          />
          {/*//La imagen de la Habitación debería de añadirse sola (debe de ser la imagen de presentación)*/}
        </div>

        <div className={styles.comment}>
          Tell us a little about you
          <textarea
            id="comments"
            className={styles.commentInp}
            name="comment"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>
        <div>
          <button type="submit" id="submit" className={styles.submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
