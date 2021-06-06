import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Input, Typography } from "@material-ui/core";
import * as Yup from "yup";
import TextField from "./../formsUI/TextField/index";
import Select from "./../formsUI/Select/index";
import axios from "axios";
import FileUpload from "./../formsUI/FileUpload/index";

const gemCategory = { precious: "precious", semi_precious: "semi_precious" };
const useStyle = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(8),
  },
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
  name: "",
  category: "",
  description: "",
  image: "",
};

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string()
    .min(8, "Too Short!")
    .required("Description is required"),
});

const AddGem = () => {

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("submitted");
    const data = new FormData();
    data.append("name", e.name);
    data.append("description", e.description);
    data.append("category", e.category);
    data.append("image", e.image);
    console.log(data);
    axios
      .post("http://localhost:8000/product", data)
      .then((res) =>console.log( res.data))
      .catch((err) => console.log(err));
  };
  const classes = useStyle();

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
                    <Typography>Add gem</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField name="name" label="Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      name="category"
                      label="Category"
                      options={gemCategory}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="description"
                      label="Description"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FileUpload name="image" />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                    >
                      Add
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

export default AddGem;
