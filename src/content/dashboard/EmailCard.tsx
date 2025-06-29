import React from 'react';
import {
  Box,
 
 
  Avatar,
  Typography,
  Stack,
  Chip,
  Divider,
  IconButton
} from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PushPinIcon from '@mui/icons-material/PushPin';


export interface EmailData {
  id: string;
  subject: string;
  profilePic: string;
  sender: string;
  date: string;
  snippet: string;
  read: boolean;
  attachments?: {
    file?: string;
    jpg?: string;
  };
}

interface EmailCardProps {
  email: EmailData;
}

const EmailCard: React.FC<EmailCardProps> = ({ email }) => {
  return (
    <Box
      p={2}
      
      width={"100%"}
    >
 
        <Stack direction="row" spacing={2} alignItems="center">
  {/* Avatar */}
  <Avatar src={email.profilePic} alt={email.sender} />

  {/* Text Block */}
  <Box flex={1} width={"60%"}>
    <Typography variant="subtitle1" fontWeight={500}>
      {email.subject}
    </Typography>
    <Typography variant="body2" color="text.secondary" noWrap>
      {email.snippet}
    </Typography>
  </Box>

  {/* Flash Icon */}
  <Box
    sx={{
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundColor: '#886cc0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <PushPinIcon sx={{ color: '#fff', fontSize: 18 }} />
  </Box>

  {/* More Icon */}
  <IconButton size="small">
    <MoreHorizIcon />
  </IconButton>
</Stack>

        {email.attachments && (
          <>
           
            <Stack direction="row" mt={2} spacing={1} display={"flex"} justifyContent={"center"}>
              {email.attachments.file && (
                <Chip label={email.attachments.file} sx={{backgroundColor:"#956dc1",color:"#fff"}}  />
              )}
              {email.attachments.jpg && (
                <Chip label="Image Attachment"  variant="outlined" />
              )}
            </Stack>
             <Divider sx={{marginTop:"3%"}} />
          </>
        )}

    </Box>
  );
};

export default EmailCard;
