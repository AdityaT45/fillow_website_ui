import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import MessegeCard from './MessegeCard';

interface Message {
  id: string;
  sender: string;
  profilePic: string;
  message: string;
  online: boolean;
  date: string;
}

interface DashboardMessagesProps {
  messages: Message[];
}

const DashboardMessages: React.FC<DashboardMessagesProps> = ({ messages }) => {
  return (
    <Box
      p={2}
      mt={2}
      bgcolor="#fff"
      borderRadius={2}
      sx={{boxShadow:"0 1px 4px rgba(0,0,0,0.08)",}}
      display="flex"
      flexDirection="column" // important: vertical stacking
      gap={2}
    >
      {/* Header Section */}
      <Box display="flex" alignItems="center">
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography variant="h6">Messages</Typography>
          <Typography variant="caption">Lorem ipsum dolor sit amet</Typography>
        </Box>

        <Button
          sx={{
            borderRadius: "25px",
            textTransform: "none",
            backgroundColor: "#886cc0",
            color: "#fff",
           
      
          
            fontSize: "0.8rem",
            '&:hover': {
              backgroundColor: "#7754b5",
            },
          }}
          variant="contained"
        >
          +new messages
        </Button>
      </Box>

      {/* Message Cards Section */}
      <Box display="flex" flexDirection="column" gap={1}>
        {messages.map((message, index) => (
          <MessegeCard key={index} message={message} />
        ))}
      </Box>
    </Box>
  );
};

export default DashboardMessages;
