import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const TicketDetails = ({ ticket }) => {
  if (!ticket) {
    return <Typography sx={{}} variant="h6">Select a ticket to view details.</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{ticket.title}</Typography>
        <Typography color="textSecondary">{ticket.status} - {ticket.priority}</Typography>
        <Typography variant="body1" sx={{ mt: 16 }}>{ticket.description}</Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 16 }}>
          <Box sx={{ width: '50%', mr: 2 }}>
            <Typography variant="subtitle1">Assignee</Typography>
            <Typography>{ticket.assignee}</Typography>
          </Box>
          <Box sx={{ width: '50%', mr: 2 }}>
            <Typography variant="subtitle1">Created At</Typography>
            <Typography>{new Date(ticket.createdAt).toLocaleString()}</Typography>
          </Box>
          <Box sx={{ width: '50%', mr: 2 }}>
            <Typography variant="subtitle1">Updated At</Typography>
            <Typography>{new Date(ticket.updatedAt).toLocaleString()}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};