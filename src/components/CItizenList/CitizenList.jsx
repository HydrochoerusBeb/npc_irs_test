import React, { useState, useMemo, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const CitizenList = ({ citizens, onSelectCitizen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("fullName");
  const [occupationFilter, setOccupationFilter] = useState("");
  const [eduFilter, setEduFilter] = useState("");
  const [uniqueEdus, setUniqueEdus] = useState([]);

  const sxStyling = {
    "& .MuiInputLabel-root": {
      color: "gray",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#4BA1A1",
      },
      "&:hover fieldset": {
        borderColor: "#2CA1A1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2CA1A1",
      },
    },
    "& .MuiInputBase-input": {
      color: "#FFFFFFDE",
    },
    mt: 2
  }

  useEffect(() => {
    const edus = Array.from(
      new Set(citizens.map((citizen) => citizen.education))
    );
    setUniqueEdus(edus);
  }, []);

  const sortedCitizens = useMemo(() => {
    let filteredCitizens = citizens.filter((citizen) =>
      citizen.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (eduFilter) {
      filteredCitizens = filteredCitizens.filter(
        (citizen) => citizen.education === eduFilter
      );
    }

    if (sortType === "dateOfBirth") {
      return filteredCitizens.sort(
        (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth)
      );
    } else if (sortType === "fullName") {
      return filteredCitizens.sort((a, b) =>
        a.fullName.localeCompare(b.fullName)
      );
    }

    return filteredCitizens;
  }, [searchTerm, citizens, sortType, occupationFilter, eduFilter]);

  const Row = ({ index, style }) => (
    <ListItem
      button
      style={{ ...style, borderBottom: "1px solid #4ba1a158" }}
      key={sortedCitizens[index].id}
      onClick={() => onSelectCitizen(sortedCitizens[index])}
    >
      <ListItemText
        primary={sortedCitizens[index].fullName}
        secondary={sortedCitizens[index].occupation}
        sx={{
          "& .MuiListItemText-secondary": {
            color: "#2CA1A1",
          },
        }}
      />
    </ListItem>
  );

  return (
    <div>
      <TextField
        label="Search by Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={sxStyling}
      />

      <FormControl fullWidth sx={sxStyling}>
        <InputLabel>Education Filter</InputLabel>
        <Select
          value={eduFilter}
          onChange={(e) => setEduFilter(e.target.value)}
          label="Education Filter"
          
        >
          <MenuItem value="" >All</MenuItem>
        {uniqueEdus.map((edu) => (<MenuItem key={edu} value={edu}>
              {edu}
            </MenuItem>))}
        </Select>
      </FormControl>


      <FormControl fullWidth sx={sxStyling}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="fullName">Name</MenuItem>
          <MenuItem value="dateOfBirth">Date of Birth</MenuItem>
        </Select>
      </FormControl>

      <p>Total Citizens: {sortedCitizens.length}</p>
      <List
        height={400}
        itemCount={sortedCitizens.length}
        itemSize={100}
        width={300}
      >
        {Row}
      </List>
    </div>
  );
};

export default CitizenList;
