import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Chip,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Trim snippet for mobile view
  const trimmedSnippet = isMobile
    ? email.snippet.split(" ").slice(0, 5).join(" ") + "..."
    : email.snippet;

  return (
    <Box p={2}>
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        {/* Avatar */}
        <Avatar src={email.profilePic} alt={email.sender} />

        {/* Text Block */}
        <Box
          flex={1}
          minWidth={0}
          sx={{
            maxWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Typography
  variant="subtitle1"
  fontWeight={500}
  noWrap={!isMobile}
  sx={{
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: { xs: "0.8rem", sm: "1rem" }, // smaller on xs (mobile), normal on sm+
  }}
>
  {email.subject}
</Typography>

<Typography
  variant="body2"
  color="text.secondary"
  sx={{
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: { xs: "0.7rem", sm: "0.9rem" }, // smaller on mobile
  }}
>
  {trimmedSnippet}
</Typography>

        </Box>

        {/* Flash Icon */}
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: '#886cc0',
            alignItems: 'center',
            justifyContent: 'center',
            display: { xs: "none", sm: "flex" },
            ml: "auto",
          }}
        >
          <PushPinIcon sx={{ color: '#fff', fontSize: 18 }} />
        </Box>

        {/* More Icon */}
        <IconButton size="small">
          <MoreHorizIcon />
        </IconButton>
      </Box>

      {/* Optional Attachments */}
      {email.attachments && (
        <>
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
            gap={1}
            flexWrap="wrap"
          >
            {email.attachments.file && (
              <Chip label={email.attachments.file} sx={{ backgroundColor: "#956dc1", color: "#fff" }} />
            )}
            {email.attachments.jpg && (
              <Chip label="Image Attachment" variant="outlined" />
            )}
          </Box>
          <Divider sx={{ marginTop: "3%" }} />
        </>
      )}
    </Box>
  );
};

export default EmailCard;
