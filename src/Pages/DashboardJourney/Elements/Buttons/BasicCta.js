import React from "react";
import Button from "@mui/material/Button";

function BasicCta({
  text = "",
  variant = "contained",
  onClick = (e) => {},
  color = "primary",
  id = "",
  overrides = {},
}) {
  return (
    <Button
      variant={variant}
      disableElevation
      onClick={onClick}
      color={color}
      id={id}
      sx={overrides}
    >
      {text}
    </Button>
  );
}

export default BasicCta;
