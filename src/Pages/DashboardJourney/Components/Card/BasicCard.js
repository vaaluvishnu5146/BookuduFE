import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function BasicCard({ children }) {
  return (
    <Card
      sx={{
        minHeight: "150px",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
      variant="outlined"
    >
      {children}
    </Card>
  );
}
