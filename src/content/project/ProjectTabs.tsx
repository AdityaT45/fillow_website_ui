import { Box, Button} from '@mui/material'
import ViewDaySharpIcon from '@mui/icons-material/ViewDaySharp';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';


interface ProjectTabsProps {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

const ProjectTabs:React.FC<ProjectTabsProps> = ({selectedStatus,setSelectedStatus}) => {
  const statuses = ["All", "ON PROGRESS", "PENDING", "CLOSED"];
  return (
    <>
     <Box  p={2} borderRadius={2} mb={2} gap={2} display="flex" flexDirection="row"  alignItems="center" >
            
 
 <Box gap={2} display="flex" flexDirection="row" alignItems="center">
        {statuses.map((status) => (
          <Button
            key={status}
            variant="text"
            onClick={() => setSelectedStatus(status)}
            sx={{
              color: 'black',
              fontSize: '1rem',
              fontWeight: selectedStatus === status ? 600 : 400,
              textTransform: 'none'
            }}
          >
            {status === "All" ? "All Status" : status.charAt(0) + status.slice(1).toLowerCase()}
          </Button>
        ))}
      </Box>

    <Box gap={2} display="flex" flexDirection="row"  alignItems="center" sx={{ml:"auto"}}> 

        
<Button
  variant="contained"  sx={{    background: '#886cc0',borderRadius:"25px" , fontSize: '1rem',   fontWeight: 400 ,textTransform: 'none'  }}
>  + New Project </Button>

<Box
          width={40}
          height={40}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer", overflow: "hidden",  }}
        >
            <ViewDaySharpIcon  sx={{ color: "#886cc0" }}/>
         
        </Box>
<Box
          width={40}
          height={40}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer", overflow: "hidden",  }}
        >
            <WindowSharpIcon  sx={{ color: "#94949e" }}/>
         
        </Box>

    </Box>

    
          </Box>
    </>
)
}

export default ProjectTabs