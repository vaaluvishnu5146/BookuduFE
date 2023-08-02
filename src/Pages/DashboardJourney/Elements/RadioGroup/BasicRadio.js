import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({
  label = "",
  id = "",
  name = "",
  options = [],
  defaultValue = "",
  overrides = {},
  onChange = (e) => {},
}) {
  return (
    <FormControl sx={overrides}>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={id}
        defaultValue={defaultValue}
        name={name}
        onChange={(e) => {
          let event = {
            ...e,
            target: {
              ...e.target,
              id: id,
              value: e.target.value,
            },
          };
          onChange(event);
        }}
      >
        {options &&
          options.map((option, index) => (
            <FormControlLabel
              key={`${id}-${name}-${option.label}-${index}`}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
}
