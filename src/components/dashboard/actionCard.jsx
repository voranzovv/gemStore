import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import axios from "axios";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ActionCard = ({ data }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    confirmAlert({
      title: "Confirm to delete?",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`${process.env.REACT_APP_BASE_URL}/product/${data._id}`)
              .then((res) => console.log("Deleted", res))
              .catch((err) => toast.error("Unable to delete"));
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description =
      document.getElementById("description").value;
    const category = document.querySelector('input[name="category"]:checked').value;
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/product/${data._id}`, {
        name: name,
        description: description,
        category: category,
      })
      .then((res) => console.log("Edited", res))
      .catch((err) => toast.error("Unable to edit"));
    console.log(name,category,description);
  };

  const handleChangeCategory = (event) => {
    setcategory(event.target.value);
  };
  return (
    <div className="col-md-4">
      <Card className="productbox">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              !data.created_at
                ? data.img
                : `${process.env.REACT_APP_UPLOAD_URL}/${data.image}`
            }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Link to={data._id}>
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.description.length > 43
                ? data.description.substring(1, 46) + "..."
                : data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleDelete}
              >
                <DeleteIcon />
              </Button>
            </Grid>
            <Grid container item xs={6} justify="flex-end">
              {/* <Link to={'edit/'+data._id}> */}
              <Button variant="contained" onClick={handleClickOpen}>
                <EditIcon />
              </Button>
              {/* </Link> */}
            </Grid>
          </Grid>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Gem</DialogTitle>
        <form onSubmit={(e) => handleUpdate(e)}>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              defaultValue={data.name}
              onChange={(e) => setname(e.target.value)}
            />
            {/* Category */}
            {/* <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Category
              </InputLabel>
              <Select
                defaultValue={data.category}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                onChange={handleChangeCategory}
                label="Category"
                // selected={data.category}
              >
                <MenuItem selected value={data.category}  >
                  {data.category}
                </MenuItem>
                <MenuItem value={"precious"}>Precious</MenuItem>
                <MenuItem value={"semi_precious"}>Semi Precious</MenuItem>
              </Select>
            </FormControl> */}

            <FormControl component="fieldset" id="category">
              <RadioGroup
                aria-label="category"
                name="category"
                // value={category}
                defaultValue={data.category}
                onChange={handleChangeCategory}
                
              >
                <FormControlLabel
                  value="precious"
                  control={<Radio />}
                  label="precious"
                  // defaultChecked={data.category === "precious" ? true : false}
                />
                <FormControlLabel
                  // defaultChecked={
                  //   data.category === "semi_precious" ? true : false
                  // }
                  value="semi_precious"
                  control={<Radio />}
                  label="semi_precious"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              onChange={(e) => setdescription(e.target.value)}
              defaultValue={data.description}
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant="outlined">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" variant="outlined">
              Subscribe
            </Button>
            <Button type="submit" color="primary" variant="outlined">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ActionCard;
