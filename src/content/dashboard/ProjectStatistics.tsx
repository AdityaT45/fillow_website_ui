
import { Box, FormControl, FormControlLabel, FormGroup,  Switch, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { BarChart } from '@mui/x-charts'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';


const ProjectStatistics = () => {
    const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    _newEvent: unknown,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  }
  return (
    <>
    <Box p={2} mt={2} bgcolor="#fff" borderRadius={2} boxShadow={2}>

       <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" >Project Statistics</Typography>


          <Box display="flex" sx={{ml:"auto"}}>
           
     <ToggleButtonGroup
  value={alignment}
  exclusive
  onChange={handleAlignment}
  aria-label="text alignment"
  
  sx={{
    backgroundColor: "#f3f0f9",
    borderRadius: "20px",
    p: 0.8,
    border: "none",
    gap: 1,
    display:{
      xs:"none",
      sm:"flex",
    }
  }}
>
  <ToggleButton
    value="left"
    aria-label="left aligned"
    sx={{
      fontSize: "0.7rem",
      px: 1.2,
      py: 0.5,
      minHeight: 28,
      borderRadius: "16px !important",
      '&.Mui-selected': {
        backgroundColor: "#886cc0",
        color: "#fff",
        border: "none",
      },
    }}
  >
    <Typography variant="caption" fontWeight={500}>Monthly</Typography>
  </ToggleButton>

  <ToggleButton
    value="center"
    aria-label="centered"
    sx={{
      fontSize: "0.7rem",
      px: 1.2,
      py: 0.5,
      minHeight: 28,
      borderRadius: "16px !important",
      '&.Mui-selected': {
        backgroundColor: "#886cc0",
        color: "#fff",
        border: "none",
      },
    }}
  >
    <Typography variant="caption" fontWeight={500}>Weekly</Typography>
  </ToggleButton>

  <ToggleButton
    value="right"
    aria-label="right aligned"
    sx={{
      fontSize: "0.7rem",
      px: 1.2,
      py: 0.5,
      minHeight: 28,
      borderRadius: "16px !important",
      '&.Mui-selected': {
        backgroundColor: "#886cc0",
        color: "#fff",
        border: "none",
      },
    }}
  >
    <Typography variant="caption" fontWeight={500}>Today</Typography>
  </ToggleButton>
</ToggleButtonGroup>


<Box
          width={40}
          height={40}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer", overflow: "hidden" }}
        >
            <MenuIcon sx={{ color: "black" }}/>
         
        </Box>

  
            
            </Box>




        </Box> 
     <BarChart
  xAxis={[{ data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }]}
  series={[
    {
      data: [50, 18, 40, 90, 40, 70, 20],
      color: '#ffa26e', // Purple
    },
    {
      data: [80, 40, 55, 20, 45, 30, 80],
      color: '#ff5ed2', // Pink
    },
  ]}
  height={300}
  slotProps={{
    bar: {
      style: {
        borderRadius: 6, // Rounded bar corners
      },
    },
  }}
/>

<Box display="flex">
  <FormControl component="fieldset">
    <FormGroup row>
      <FormControlLabel
        value="number"
        control={<Switch color="primary" />}
        label="Number"
        labelPlacement="start"
      />
      <FormControlLabel
        value="analytics"
        control={<Switch color="primary" />}
        label="Analytics"
        labelPlacement="start"
      />
    </FormGroup>
  </FormControl>
</Box>

    </Box>
    </>

  )
}

export default ProjectStatistics