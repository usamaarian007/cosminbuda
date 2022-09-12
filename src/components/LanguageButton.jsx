import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall({ setContect, fun }) {
  const [age, setAge] = React.useState("");

  const funs = () => {
    setContect(age);
  };

  const handleChange = (event) => {
    // if (event.target.value) {
    setAge(event.target.value);
    // }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} className="mt-3" size="small">
      <InputLabel id="demo-select-small">English</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
    

        <MenuItem value={"English"} onClick={funs()}>
          English
        </MenuItem>
        <MenuItem value={"Spanish"} onClick={funs()}>
          French
        </MenuItem>
      </Select>
    </FormControl>
  );
}
