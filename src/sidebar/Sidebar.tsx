import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Profile from "./Profile";
import Menu from "./Menu";
import Footer from "./Footer";
import Logo from "./Logo";

interface Company {
  name: string;
  logo: string;
  description: string;
}

interface User {
  name: string;
  email: string;
  avatar: string;
  taskProgress: {
    completed: number;
    total: number;
  };
}

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
}

interface Footerdata {
  title: string;
  year: string;
  tagline: string;
}

interface SidebarProps {
  company: Company;
  user: User;
  sidebaritem: SidebarItem[];
  footerdata: Footerdata;
  activeLabel: string;
  onSelect: (label: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  user,
  sidebaritem,
  footerdata,
  activeLabel,
  onSelect,
  company,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Hide on mobile
  if (isMobile) return null;

  return (
    <Box
      p={2}
      pl={0}
      sx={{
        width: {
          sm: "60px",   // tablet width
          md: "250px",  // normal size for md+
        },
      }}
    >
      <Logo company={company} />
      <Box m={2} mb={1} sx={{ display: { xs: "none", md: "flex"}}}>
        <Typography color="textDisabled" variant="button">
          main Menu
        </Typography>
      </Box>
      <Menu
        sidebaritem={sidebaritem}
        activeLabel={activeLabel}
        onSelect={onSelect}
      />
      <Profile user={user} />
      <Footer footerdata={footerdata} />
    </Box>
  );
};

export default Sidebar;
