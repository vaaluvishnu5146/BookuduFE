import * as React from "react";
import Card from "@mui/material/Card";

export default function BasicCard({ children, overrides = {} }) {
  return (
    <Card
      sx={{
        minHeight: "150px",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        ...overrides,
      }}
      variant="outlined"
    >
      {children}
    </Card>
  );
}
