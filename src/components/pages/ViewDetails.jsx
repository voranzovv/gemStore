import React, { useEffect, useState } from "react";
import Banner from "../banner";
import ContentTitle from "../contentTitle";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import {
  Card,
  TextField,
  Grid,
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  media: {
    height: 240,
    width:600,
  },
}));

function ViewDetails(props) {
  const classes = useStyles();
  const theme = useTheme();
  const id = useParams().id;
  const [gemData, setgemData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/product/" + id)
      .then((gem) => setgemData(gem.data))
      .catch((err) => console.log("Something wrong!!!", err));
    console.log(id);
  }, []);

  return !gemData ? null : (
    <div class="container" style={{ marginTop: "8%" }}>
      {/* material ui */}
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6}>
          <Card>
            <div>
              <CardContent className={classes.content}>
                <Typography component="h1" variant="h3">
                  {gemData.name}
                </Typography>
                <ContentTitle />

                <i class="badge progress-bar-info">
                  posted {moment(gemData.created_at).startOf("hour").fromNow()}
                </i>
                <Typography component="h6" variant="h6" color="textSecondary">
                  {gemData.description}
                </Typography>
              </CardContent>
              <ContentTitle />
            </div>
          </Card>
        </Grid>
        <Grid item xs={6} >
          {/* <Card>
            <img
              src={"http://localhost:8000/uploads/" + gemData.image}
              alt={gemData.image}
            />
          </Card> */}
          <Card className={''}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={"http://localhost:8000/uploads/" + gemData.image}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <div
        className="container"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      ></div>
    </div>
  );
}

export default ViewDetails;
