import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Phone");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      style={{ backgroundColor: "#DAD9D9" }}
    >
      <a
        id="localitation"
        href="https://www.google.com/maps/place/Av.+del+Aeropuerto,+6,+14004+C%C3%B3rdoba/@37.8794552,-4.7909693,17z/data=!3m1!4b1!4m5!3m4!1s0xd6d209f970d6cd3:0xa6c1f60ece58832b!8m2!3d37.8794552!4d-4.7887806"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
      </a>
      <a id="Phone" href="tel:671751844">
        <BottomNavigationAction
          label="Phone"
          value="Phone"
          icon={<PhoneInTalkIcon />}
        />
      </a>
      <a
        id="instagram"
        href="https://www.instagram.com/jizga/"
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
        id="facebook"
        href="https://www.facebook.com/viviana.vegaayllon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BottomNavigationAction
          label="facebook"
          value="facebook"
          icon={<FacebookIcon />}
        />
      </a>
    </BottomNavigation>
  );
}
