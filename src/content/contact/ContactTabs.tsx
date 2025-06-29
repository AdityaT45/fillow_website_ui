import { Box, Button, FormControl, Input, InputAdornment} from '@mui/material'
import ViewDaySharpIcon from '@mui/icons-material/ViewDaySharp';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import SearchIcon from "@mui/icons-material/Search";


const ContactTabs = () => {

  return (
    <>
     <Box  p={3} borderRadius={2} mb={2} gap={2} display="flex" flexDirection="row"  alignItems="center" >
              <Box sx={{ width: "16%"}}>
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
    backgroundColor: "#ffffff",
    width: "100%",
    border: "1px solid #ccc",
    fontSize: "12px", 
    "&::placeholder": {
      fontSize: "12px", 
    },
    "& input::placeholder": {
      fontSize: "12px"  
    }
  }}
            />
          </FormControl>
        </Box> 
 
 

    <Box gap={2} display="flex" flexDirection="row"  alignItems="center" sx={{ml:"auto"}}> 

        
<Button
  variant="contained"  sx={{    background: '#886cc0',borderRadius:"25px" , fontSize: '1rem',   fontWeight: 400 ,textTransform: 'none'  }}
>  + New Contact </Button>

<Box
          width={40}
          height={40}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer", overflow: "hidden",  }}
        >
            <ViewDaySharpIcon  sx={{ color: "#94949e" }}/>
         
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
            <WindowSharpIcon  sx={{ color: "#886cc0" }}/>
         
        </Box>

    </Box>

    
          </Box>
    </>
)
}

export default ContactTabs