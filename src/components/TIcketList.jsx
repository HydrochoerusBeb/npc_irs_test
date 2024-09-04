import React, { useState, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const TicketList = ({ tickets, onSelectTicket }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) =>
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, tickets]);

  const Row = ({ index, style }) => (
    <ListItem
      button
      style={{
        ...style,
        borderBottom: "1px solid #4ba1a158",
      }}
      key={filteredTickets[index].id}
      onClick={() => onSelectTicket(filteredTickets[index])}
    >
      <ListItemText
        primary={filteredTickets[index].title}
        secondary={`Status: ${filteredTickets[index].status}, Priority: ${filteredTickets[index].priority}`}
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
        label="Search by Title"
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
      <p>Total Tickets: {filteredTickets.length}</p>
      <List
        height={600}
        itemCount={filteredTickets.length}
        itemSize={100}
        width={"100%"}
        sx={{ mb: 5, mr: 20 }}
      >
        {Row}
      </List>
    </div>
  );
};
