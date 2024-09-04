import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const CitizenDetails = ({ citizen }) => {
  if (!citizen) {
    return <Typography sx={{ mt: 32 }} variant="h6">Select a citizen to view details.</Typography>;
  }

  return (
    <Card sx={{ width: "80%" }}>
      <CardContent>
        <Typography variant="h5">{citizen.fullName}</Typography>
        <Typography color="textSecondary">{citizen.occupation}</Typography>

        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} mt={2}>
          <Box flex={1} mr={{ md: 2 }}>
            <Typography variant="h6">Basic Information</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Date of Birth" secondary={citizen.dateOfBirth instanceof Date ? citizen.dateOfBirth.toDateString() : citizen.dateOfBirth} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={citizen.address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone" secondary={citizen.phone} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={citizen.email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Education" secondary={citizen.education} />
              </ListItem>
            </List>
          </Box>

          <Box flex={1}>
            <Typography variant="h6">Family Members</Typography>
            <List>
              {citizen.familyMembers.map((member, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={member.name}
                    secondary={`Relation: ${member.relation}, Age: ${member.age}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CitizenDetails;
