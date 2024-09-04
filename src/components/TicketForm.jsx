import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

export const TicketForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');
  const [priority, setPriority] = useState('Medium');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: Date.now().toString(),
      title,
      description,
      status,
      priority,
      createdAt: new Date(),
      updatedAt: new Date(),
      assignee,
    };
    
    
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    storedTickets.unshift(newTicket);  
    localStorage.setItem('tickets', JSON.stringify(storedTickets));

    
    if (onSubmit) {
      onSubmit(newTicket);
    }
 
    setTitle('');
    setDescription('');
    setStatus('Open');
    setPriority('Medium');
    setAssignee('');
  };

  const commonTextFieldStyles = {
    '& .MuiInputLabel-root': {
      color: '#E0E0E0',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#4BA1A1',
      },
      '&:hover fieldset': {
        borderColor: '#2CA1A1',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2CA1A1',
      },
    },
    '& .MuiInputBase-input': {
      color: '#FFFFFF',
    },
  };

  const buttonStyles = {
    backgroundColor: '#4BA1A1',
    '&:hover': {
      backgroundColor: '#2CA1A1',
    },
    color: '#FFFFFF',
  };
  
  const menuItemStyles = {
    color: '#FFFFFF',
    backgroundColor: '#2C2C2C',
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Ticket</h2>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        sx={commonTextFieldStyles}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={4}
        required
        sx={commonTextFieldStyles}
      />
      <TextField
        label="Status"
        variant="outlined"
        fullWidth
        margin="normal"
        select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
        sx={commonTextFieldStyles}
      >
        <MenuItem value="Open" sx={menuItemStyles}>Open</MenuItem>
        <MenuItem value="In Progress" sx={menuItemStyles}>In Progress</MenuItem>
        <MenuItem value="Closed" sx={menuItemStyles}>Closed</MenuItem>
      </TextField>
      <TextField
        label="Priority"
        variant="outlined"
        fullWidth
        margin="normal"
        select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
        sx={commonTextFieldStyles}
      >
        <MenuItem value="Low" sx={menuItemStyles}>Low</MenuItem>
        <MenuItem value="Medium" sx={menuItemStyles}>Medium</MenuItem>
        <MenuItem value="High" sx={menuItemStyles}>High</MenuItem>
      </TextField>
      <TextField
        label="Assignee"
        variant="outlined"
        fullWidth
        margin="normal"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        required
        sx={commonTextFieldStyles}
      />
      <Button type="submit" variant="contained" color="primary" sx={buttonStyles}>
        Create Ticket
      </Button>
    </form>
  );
};
