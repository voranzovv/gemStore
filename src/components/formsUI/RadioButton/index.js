import { useField, useFormikContext } from "formik";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
} from "@material-ui/core";

const RadioWrapper = ({ name, options, label, fieldset, ...otherProps }) => {
    // console.log(this.props);
  const { setFieldValue } = useFormikContext(name);
  const [field, meta] = useField(name);
  const handleChange = (e) => {
      console.log('working',e.target.name);
    // const { checked } = e.target;
    // setFieldValue(checked);
  };

  const configCheckBox = {
    ...field,
    onChange: handleChange,
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{fieldset}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        {...configCheckBox}
      >
        {Object.keys(options).map((item, post) => {
          return (
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              key={post}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioWrapper;

{
  /* <FormControl component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
  </RadioGroup>
</FormControl> */
}
