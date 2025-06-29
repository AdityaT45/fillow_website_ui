import React from 'react';
import {
  Box,
  FormControl,
  Badge,
  Button,
  Input,
  InputAdornment,
  Typography,
  Menu,
  MenuItem,
  Avatar
} from '@mui/material';

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';

interface User {
  name: string;
  email: string;
  avatar: string;
  taskProgress: {
    completed: number;
    total: number;
  };
}

interface TopBarProps {
  activeLabel: string;
  user: User;
}

const TopBar: React.FC<TopBarProps> = ({ activeLabel,user }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center" p={2} gap={1}>
      {/* Menu Icon */}
      <Box
        width={40}
        height={40}
        borderRadius="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ cursor: "pointer", overflow: "hidden" }}
      >
        <MenuIcon sx={{ color: "black" }} />
      </Box>

      {/* Page Title */}
      <Typography
        variant="h5"
        ml={2}
        sx={{
          fontWeight: "bold",
          display: { xs: "none", md: "block" },
        }}
      >
        {activeLabel}
      </Typography>

      {/* Search */}
      

      {/* Icons & Avatar */}
      <Box display="flex" alignItems="center" gap={4} ml="auto">

       
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <Input
            placeholder="Search here..."
            disableUnderline
            endAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "gray" }} />
              </InputAdornment>
            }
            sx={{
              borderRadius: "25px",
              padding: "6px 12px",
              width: "100%",
              border: "1px solid #ccc",
              fontSize: "12px",
              "& input::placeholder": {
                fontSize: "12px"
              }
            }}
          />
        </FormControl>
     
        {/* Badges */}
       <Box   display={{ xs: "none", sm: "flex" }} alignItems="center" gap={4}>
  {[
    { Icon: StarIcon, color: '#fca9d7' },
    { Icon: NotificationsIcon, color: '#febe01' },
    { Icon: MailIcon, color: '#f63154' },
    { Icon: CalendarMonthIcon, color: '#08bc3c' },
  ].map(({ Icon, color }, i) => (
    <Badge
      key={i}
      badgeContent={38}
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: color,
          color: '#fff',
        },
      }}
    >
      <Icon color="action" />
    </Badge>
  ))}

  <SettingsIcon color="action" />
</Box>


        {/* Avatar and Language Selector */}
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar
            alt="User"
            src={user.avatar}
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              cursor: "pointer",
              border: "2px solid #fff",
              boxShadow: "0 0 0 2px #886cc0"
            }}
          />

          <Button
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleClick}
            sx={{
              textTransform: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              borderRadius: "25px",
              backgroundColor: "#886cc0",
              fontSize: "0.75rem",
              px: 2,
              py: 0.5,
              minHeight: "32px"
            }}
          >
            EN
          </Button>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Hin</MenuItem>
            <MenuItem onClick={handleClose}>Mar</MenuItem>
            <MenuItem onClick={handleClose}>Fr</MenuItem>
            <MenuItem onClick={handleClose}>Du</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
