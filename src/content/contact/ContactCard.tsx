import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Contact {
  id: string;
  name: string;
  company:string;
  ProfilePicture: string;
}

interface ContactCardProps {
    contact: Contact;
}

const ContactCard:React.FC<ContactCardProps> = ({contact}) => {
  return (
    <>
    <Box
  sx={{
    width: {
      xs: '85%',     // Full width on small screens
      sm: 260         // Fixed width on larger screens
    },
    p: 4,
    borderRadius: 3,
    boxShadow:"0 1px 4px rgba(0,0,0,0.08)",
    bgcolor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative"
  }}
>
      {/* More icon top right */}
      <Box position="absolute" top={10} right={10}>
        <MoreVertIcon sx={{ color: '#999', fontSize: 20 }} />
      </Box>

      {/* Profile Image with online dot */}
      <Box position="relative">
        <Avatar
          src={contact.ProfilePicture}
          alt={contact.name}
          sx={{ width: 80, height: 80 }}
        />
        
          <Box
            width={12}
            height={12}
            bgcolor="#13bd5c"
            borderRadius="50%"
            border="2px solid white"
            position="absolute"
            bottom={4}
            right={4}
          />
        
      </Box>

      {/* Name & Company */}
      <Typography mt={1} fontWeight={600}>
        {contact.name}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {contact.company}
      </Typography>

      {/* Action Icons */}
      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <IconButton sx={{ bgcolor: '#f2eaff' }}>
          <PhoneIcon sx={{ color: '#886cc0' }} />
        </IconButton>
        <IconButton sx={{ bgcolor: '#f2eaff' }}>
          <ChatIcon sx={{ color: '#886cc0' }} />
        </IconButton>
        <IconButton sx={{ bgcolor: '#f2eaff' }}>
          <VideoCallIcon sx={{ color: '#886cc0' }} />
        </IconButton>
      </Box>
    </Box>
    </>
  )
}

export default ContactCard