import React from "react";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import whatsapp from "../assets/icons/whatsapp (1).png";
import localitation from "../assets/icons/localitation.png";

export default function Footer() {
  return (
    <div>
      <a
        id="localitation"
        href="https://www.google.com/maps/place/Av.+del+Aeropuerto,+6,+14004+C%C3%B3rdoba/@37.8794552,-4.7909693,17z/data=!3m1!4b1!4m5!3m4!1s0xd6d209f970d6cd3:0xa6c1f60ece58832b!8m2!3d37.8794552!4d-4.7887806"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={localitation}
          className="localitation"
          alt="localitation"
          style={{ width: 20, height: 20 }}
        ></img>
      </a>
      <a id="whatsapp" href="tel:671751844">
        <img
          src={whatsapp}
          className="whatsapp"
          alt="whatsapp"
          style={{ width: 20, height: 20 }}
        ></img>
      </a>
      <a
        id="instagram"
        href="https://www.instagram.com/jizga/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={instagram}
          className="instagram"
          alt="instagram"
          style={{ width: 20, height: 20 }}
        ></img>
      </a>
      <a
        id="facebook"
        href="https://www.facebook.com/viviana.vegaayllon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={facebook}
          className="facebook"
          alt="facebook"
          style={{ width: 20, height: 20 }}
        ></img>
      </a>
    </div>
  );
}
