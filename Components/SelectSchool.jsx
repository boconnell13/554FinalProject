import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import schoolObject from "../Utils/schools";

function SelectSchool(props) {
  const { setSchool, ...otherProps } = props;

  return (
    <Autocomplete
      {...otherProps}
      id="school-select"
      options={schoolObject}
      autoHighlight
      onChange={(e) => {
        if (e.target.innerText) props.setSchool(e.target.innerText);
      }}
      getOptionLabel={(option) => option.institution}
      defaultValue={{
        institution: props.initial === undefined ? "" : props.initial,
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.institution}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Choose a School" />
      )}
    />
  );
}

export default SelectSchool;
