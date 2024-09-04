import React, { useState, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export const TicketList = ({ tickets, onSelectTicket }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("priority");
  const [statusFilter, setStatusFilter] = useState("");

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

  const sortedTickets = useMemo(() => {
    let filteredTickets = tickets.filter(ticket =>
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (statusFilter) {
      filteredTickets = filteredTickets.filter(ticket => ticket.status === statusFilter);
    }

    if (sortType === "priority") {
      return filteredTickets.sort((a, b) => {
        const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    }

    return filteredTickets;
  }, [searchTerm, tickets, sortType, statusFilter]);

  const Row = ({ index, style }) => (
    <ListItem
      button
      style={{
        ...style,
        borderBottom: "1px solid #4ba1a158",
      }}
      key={sortedTickets[index].id}
      onClick={() => onSelectTicket(sortedTickets[index])}
    >
      <ListItemText
        primary={sortedTickets[index].title}
        secondary={`Status: ${sortedTickets[index].status}, Priority: ${sortedTickets[index].priority}`}
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
        sx={sxStyling}
      />

      <FormControl fullWidth sx={sxStyling}>
        <InputLabel>Status Filter</InputLabel>
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          label="Status Filter"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Closed">Closed</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={sxStyling}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="priority">Priority</MenuItem>
          <MenuItem value="title">Title</MenuItem>
        </Select>
      </FormControl>

      <p>Total Tickets: {sortedTickets.length}</p>
      <List
        height={600}
        itemCount={sortedTickets.length}
        itemSize={100}
        width={"100%"}
        sx={{ mb: 5, mr: 20 }}
      >
        {Row}
      </List>
    </div>
  );
};
