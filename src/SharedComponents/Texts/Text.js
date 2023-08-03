import React from "react";
import Typography from "@mui/material/Typography";

function Text({ text = "", variant = "h1", id = "", overrides = {} }) {
  return (
    <Typography variant={variant} gutterBottom id={id} overrides={overrides}>
      {text}
    </Typography>
  );
}

export default Text;
