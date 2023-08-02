import React from "react";
import TextField from "@mui/material/TextField";

function TextInput({
  label = "",
  variant = "outlined",
  id = "",
  name = "",
  onChange = (e) => {},
  overrides = {},
}) {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      name={name}
      onChange={onChange}
      sx={overrides}
    />
  );
}

export default TextInput;
