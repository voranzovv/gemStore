import React, { useEffect, useState } from "react";
import Banner from "../banner";
import ContentTitle from "../contentTitle";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Card, TextField } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

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
      <div
        className="container"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Card className={classes.root}>
          <div
            className={classes.details}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <CardContent className={classes.content}>
              <Typography component="h1" variant="h1">
                {gemData.name}
              </Typography>
              <ContentTitle />

              <i class="badge progress-bar-info">
                posted {moment(gemData.created_at).startOf("hour").fromNow()}
              </i>
              <Typography
                variant="subtitle1"
                component="h2"
                variant="h2"
                color="textSecondary"
              >
                {gemData.description}
              </Typography>
            </CardContent>
            <ContentTitle />
          </div>
          <CardMedia
            className={classes.cover}
            image={"http://localhost:8000/uploads/" + gemData.image}
            title="Live from space album cover"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "30%",
            }}
          />
        </Card>
      </div>
      <Card>
        <ContentTitle />
        <div
          style={{
            marginTop: "10px",
            paddingLeft: "250px",
            paddingRight: "250px",
          }}
          className="container"
        >
          <div class="form-group row">
            <div class="col-sm-12">
              <label for="exampleFormControlSelect1">Name</label>
              <input
                class="form-control form-control-lg"
                type="text"
                value={gemData.name}
              />{" "}
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <label for="exampleFormControlSelect1">Description</label>

              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={gemData.description}
              >
                
              </textarea>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Category</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option selected>{gemData.category}</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <form>
            <div class="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </form>
          <div class="form-group row">
            <div class="col-sm-12">
              <button className="btn btn-primary form-control">Update</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ViewDetails;
