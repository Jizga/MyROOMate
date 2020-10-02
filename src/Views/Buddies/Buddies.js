import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import Pas from "../../assets/images/Buddies/Pas.png";
import Feli from "../../assets/images/Buddies/Felipe.jpg";
import styles from "./Buddies.module.css";

export default function Buddies() {
  return (
    <div>
      <div className={styles.title}>
        <h3 className={styles.T}>Your News Buddies</h3>
      </div>
      <div className={styles.bodyBuddies}>
        <div className={styles.Pascual}>
          <img className={styles.PasImg} src={Pas} alt="Pas"></img>
          <p className={styles.descriptionBuddies}>
            Pascual is 24 years old, currently he is a waiter in the restaurant
            'La Taberna del Río', in the Judería. He has a degree in STF
            (Science and Tecnology of Food).
          </p>

          <a
            id="PasInsta"
            href="https://www.instagram.com/aronvellon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BottomNavigationAction
              label="instagram"
              value="instagram"
              icon={<InstagramIcon />}
            />
          </a>
          <a
            id="Pasfacebook"
            href="https://www.facebook.com/pascu.vegaayllon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BottomNavigationAction
              label="facebook"
              value="facebook"
              icon={<FacebookIcon />}
            />
          </a>
        </div>
        <div className={styles.Felipe}>
          <img className={styles.FeliImg} src={Feli} alt="Feli"></img>
          <p className={styles.descriptionBuddies}>
            Feli is 24 year old, the same years that Pascual because they are
            twins. Rigth now, Felipe is working as a cashier in a supermarket in
            Córdoba.
          </p>
          <div className={styles.links}>
            <a
              id="FeliInsta"
              href="https://www.instagram.com/novose_96/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BottomNavigationAction
                label="instagram"
                value="instagram"
                icon={<InstagramIcon />}
              />
            </a>
            <a
              id="Felifacebook"
              href="https://www.facebook.com/felipe.vegaayllon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BottomNavigationAction
                label="facebook"
                value="facebook"
                icon={<FacebookIcon />}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
