import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import * as Yup from "yup";
import TextField from "./../formsUI/TextField/index";
import RadioWrapper from "./../formsUI/RadioButton/index";
import axios from "axios";

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
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  userType: "admin",
  password: "",
  cpassword: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required(),
  mobileNumber: Yup.number()
    // .integer()
    .min(110000000, "Invalid number!")
    .max(799999999, "Invalid number!")
    // .typeError("Please enter a valid email")
    .required(),
  password: Yup.string().min(8, "Too Short!").required("Password is required"),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  // userType: Yup.string().required(),
});

const Signup = () => {
  const classes = useStyle();

  const handleSubmit = (e) => {
    console.log(e);
    axios
      .post("http://localhost:8000/user/signup", e)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
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

                  <Grid item xs={6}>
                    <TextField name="firstName" label="First Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="lastName" label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="mobileNumber" label="Mobile" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="password"
                      label="Password"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="cpassword"
                      label="Confirm password"
                      type="password"
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <RadioWrapper
                      options={[
                        { id: "admin", name: "admin" },
                        { id: "user", name: "user" },
                      ]}
                      fieldset="User Type"
                      label="User Type"
                      
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                    >
                      Sign up
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

export default Signup;
