import { Box, Typography } from '@mui/material';
import React from 'react'
import EmailCard from './EmailCard';

export interface EmailData {
  id: string;
  subject: string;
  profilePic: string;
  sender: string;
  date: string;
  snippet: string;
  read: boolean;
  attachments: {
    file: string;
    jpg: string;
  };
}


interface RecentEmailsProps {
  emails: EmailData[];
}

const RecentEmails:React.FC<RecentEmailsProps> = ({emails}) => {
  return (
    <>
    <Box p={2} mt={2} bgcolor="#fff" borderRadius={2} sx={{boxShadow:"0 1px 4px rgba(0,0,0,0.08)",}}>
    <Typography  fontWeight={600} mb={1}>
      Recent Emails </Typography>
    {emails.map((email) => (
        <EmailCard key={email.id} email={email} />
      ))}

    
      </Box>
    </>
  )
}

export default RecentEmails