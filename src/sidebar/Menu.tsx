import { Box, Typography } from '@mui/material';
import React from 'react'


interface SidebarItem {
  label: string;
  icon: string;
  route: string;
  badge?: number; 
}

interface MenuProps {
    sidebaritem: SidebarItem[];
    activeLabel: string;
    onSelect: (label: string) => void;
}


const Menu:React.FC<MenuProps> = ({sidebaritem,activeLabel,onSelect}) => {
  return (
    <>
    {
        sidebaritem.map((item, index) =>(
          
          <Box sx={{display: 'flex', alignItems:'center' }} key={index}  onClick={() => onSelect(item.label)}
          style={{
            padding: '4.5% 10%',
            marginLeft:'0px',
             borderTopRightRadius: '26px',
    borderBottomRightRadius: '88px',
            
            cursor: 'pointer',
            background: item.label === activeLabel ? '#f2eaff' : 'transparent',
              color: item.label === activeLabel ? '#886cc0' : 'inherit',
          }}>
            <Typography sx={{ fontFamily: 'Roboto' }}>{item.label}</Typography>
          <Box sx={{ml:"auto"}}> {item.badge && <Typography >({item.badge})</Typography>} </Box>
          </Box>
           

          
        ))
    }
    </>
  )
}

export default Menu