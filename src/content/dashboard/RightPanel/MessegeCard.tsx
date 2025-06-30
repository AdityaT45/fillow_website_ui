import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Badge,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
    borderRadius: '50%',
    width: 10,
    height: 10,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const MessegeCard: React.FC<MessegeCardProps> = ({ message }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Trim to 5 words for mobile view
  const getTrimmedMessage = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  const displayMessage = isMobile ? getTrimmedMessage(message.message, 4) : message.message;

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" py={1} px={2}>
      <StyledBadge
        variant="dot"
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        invisible={!message.online}
      >
        <Avatar src={message.profilePic} alt={message.sender} />
      </StyledBadge>

      <Box flex={1} ml={2}>
        <Typography variant="subtitle2" fontWeight={600}>
          {message.sender}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: '250px'
          }}
        >
          {displayMessage}
        </Typography>
      </Box>

      <Box textAlign="right">
        <Typography variant="caption" color="text.secondary">
          {message.date}
        </Typography>
        <IconButton size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MessegeCard;
