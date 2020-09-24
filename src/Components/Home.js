import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GrayRoomPicture from "../assets/images/PrincipalGrayRoom.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ marginTop: 10 }}>
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              backgroundColor: "#DAD9D9",
              textAlign: "end",
            }}
          >
            <text style={{ marginRight: 300 }}>GrayRoom</text>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginLeft: 40 }}>
          <Paper
            className={classes.paper}
            style={{ padding: "33.33vh", backgroundColor: "#C4C4C4" }}
          >
            <img
              className="GrayRoomPicture"
              src={GrayRoomPicture}
              alt="GrayRoomPicture"
              style={{
                width: "15rem",
                height: "25rem",
              }}
            />
            <button className="morePictures">More pictures</button>
            <Grid className="commentsArea"> Coments Area</Grid>
            <button className="moreInfo">More information</button>
            <button className="add">I LIKE IT!!</button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{
              backgroundColor: "#DAD9D9",
              textAlign: "end",
            }}
          >
            <text style={{ marginRight: 300 }}>BLueRoom</text>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 HOLA?</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
