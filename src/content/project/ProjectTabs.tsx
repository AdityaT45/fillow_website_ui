import { Box, Button, useMediaQuery, useTheme, Stack } from '@mui/material';
import ViewDaySharpIcon from '@mui/icons-material/ViewDaySharp';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';

interface ProjectTabsProps {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({ selectedStatus, setSelectedStatus }) => {
  const statuses = ["All", "ON PROGRESS", "PENDING", "CLOSED"];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  

  return (
    <Box
      p={2}
      borderRadius={2}
      mb={2}
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      gap={isMobile ? 2 : 4}
      alignItems={isMobile ? "stretch" : "center"}
      justifyContent="space-between"
      sx={{
        backgroundColor: "#fff",
        boxShadow: 2,
      }}
    >
      {/* Status Tabs */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={isMobile ? 1 : 2}
        justifyContent={isMobile ? "center" : "flex-start"}
      >
        {statuses.map((status) => (
          <Button
            key={status}
            onClick={() => setSelectedStatus(status)}
            variant="text"
            sx={{
              color: 'black',
              fontSize: '0.9rem',
              fontWeight: selectedStatus === status ? 600 : 400,
              textTransform: 'none',
              borderBottom: selectedStatus === status ? '2px solid #886cc0' : 'none',
              borderRadius: 0,
              px: 1,
              minWidth: isMobile ? 'auto' : '90px',
            }}
          >
            {status === "All" ? "All Status" : status.charAt(0) + status.slice(1).toLowerCase()}
          </Button>
        ))}
      </Box>

      {/* Right Side: Button + View Toggle */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={isMobile ? "center" : "flex-end"}
        spacing={2}
        mt={isMobile ? 2 : 0}
        flexWrap="wrap"
      >
        <Button
          variant="contained"
          sx={{
            background: '#886cc0',
            borderRadius: "25px",
            fontSize: '0.875rem',
            fontWeight: 500,
            textTransform: 'none',
            px: 3,
            whiteSpace: 'nowrap'
          }}
        >
          + New Project
        </Button>

        <Box
          width={36}
          height={36}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer", backgroundColor: '#f4f4f6' }}
        >
          <ViewDaySharpIcon sx={{ color: "#886cc0", fontSize: 20 }} />
        </Box>

        <Box
          width={36}
          height={36}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer", backgroundColor: '#f4f4f6' }}
        >
          <WindowSharpIcon sx={{ color: "#94949e", fontSize: 20 }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProjectTabs;
