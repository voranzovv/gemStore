import { useFormikContext, useField } from "formik";

const FileUpload = ({ name, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    setFieldValue(name, e.target.files[0]);
  };
  const configSelect = {
    ...field,
    ...otherProps,
    onChange: handleChange,
    accept: "image/*",
    id: "contained-button-file",
    type: "file",
  };

  if (meta && meta.touch && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return <input {...configSelect} value={undefined}/>;
};
export default FileUpload;
