import { Avatar, Box,  Typography } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';




interface Message {
  id: string;
  sender: string;
  profilePic: string;
  message: string;
  online: boolean;
  date: string; 
}

interface MessegeCardProps {
    message: Message;

}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      
      
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));



const MessegeCard:React.FC<MessegeCardProps> = ({message}) => {
  return (
    <>
    <Box display="flex" alignItems="center" p={2}  borderBottom={"1px solid grey"}  mb={1}>

        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"

         sx={{
          '& .MuiBadge-dot': {
            height: 10,
            minWidth: 10,
            borderRadius: '50%',
            backgroundColor: message.online ? '#44b700' : '#9e9e9e', // green or grey
          },
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
        <Typography variant="body1" fontWeight={600} flex={1}>
          {message.sender}      </Typography>
          <Typography variant="body2" color="text.secondary" flex={2}></Typography>
        <Typography variant="body2" color="text.secondary" flex={3}>
          {message.message} </Typography>
        <Typography variant="caption" color="text.secondary" ml={2}>
          {message.date} </Typography>

        
        

    </Box>
    </>
  )
}

export default MessegeCard