import React, { useState, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const CitizenList = ({ citizens, onSelectCitizen }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCitizens = useMemo(() => {
    return citizens.filter((citizen) =>
      citizen.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, citizens]);

  const Row = ({ index, style }) => (
    <ListItem
      button
      style={{...style, borderBottom: "1px solid #4ba1a158",}}
      key={filteredCitizens[index].id}
      onClick={() => onSelectCitizen(filteredCitizens[index])}
    >
      <ListItemText
        primary={filteredCitizens[index].fullName}
        secondary={filteredCitizens[index].occupation}
        sx={{
          '& .MuiListItemText-secondary': {
            color: '#2CA1A1',
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
        sx={{
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
        }}
      />
      <p>Total Citizens: {filteredCitizens.length}</p>
      <List
        height={400}
        itemCount={filteredCitizens.length}
        itemSize={100}
        width={300}
      >
        {Row}
      </List>
    </div>
  );
};

export default CitizenList;
