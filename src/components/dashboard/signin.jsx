import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import * as Yup from "yup";
import TextField from "./../formsUI/TextField/index";
import RadioWrapper from "./../formsUI/RadioButton/index";
import axios from "axios";
import { Redirect } from "react-router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

const useStyle = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(8),
    // width: 300,
    // margin: 100,
  },
  //style for font size
  resize: {
    fontSize: 50,
  },

  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
}));

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const [redirect, setredirect] = useState(false);
  const classes = useStyle();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
    } else {
      var decoded = jwt_decode(localStorage.getItem("token"));
      console.log(decoded);
      setredirect(true);
    }
  }, []);

  const handleSubmit = (e) => {
    console.log(e);
    axios
      .post("http://localhost:8000/user/login", e)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        setredirect(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  };
  if (redirect) {
    return <Redirect to="/hotels" />;
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(e) => handleSubmit(e)}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="password"
                      label="Password"
                      type="password"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SignIn;
