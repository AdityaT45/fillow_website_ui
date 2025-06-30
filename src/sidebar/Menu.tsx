import { Box, Typography, Tooltip } from '@mui/material';
import React from 'react';
import * as Icons from '@mui/icons-material';

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

const Menu: React.FC<MenuProps> = ({ sidebaritem, activeLabel, onSelect }) => {
  return (
    <>
      {sidebaritem.map((item, index) => {
        const IconComponent = Icons[item.icon as keyof typeof Icons];
        const isActive = item.label === activeLabel;

        return (
          <Tooltip
            title={item.label}
            placement="right"
            key={index}
          >
            <Box
              onClick={() => onSelect(item.label)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: {
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-start',
                },
                padding: '10px',
                marginBottom: 1,
                borderTopRightRadius: '16px',
                borderBottomRightRadius: '30px',
                cursor: 'pointer',
                transition: '0.3s',
                backgroundColor: isActive ? '#f2eaff' : 'transparent',
                color: isActive ? '#886cc0' : 'text.primary',
                '&:hover': {
                  backgroundColor: '#f8f8f8',
                },
              }}
            >
              {IconComponent && (
  <IconComponent
    sx={{
      fontSize: 24,
      color: isActive ? '#886cc0' : 'inherit',
      minWidth: '24px',
      ml: { xs: 0, sm: 3, md: 0 }, // Only apply margin-left on tablets
    }}
  />
)}


              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 500,
                  marginLeft: 2,
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                  },
                }}
              >
                {item.label}
              </Typography>

              {item.badge && (
                <Box
                  sx={{
                    ml: 'auto',
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'block',
                    },
                  }}
                >
                  <Typography variant="body2" fontWeight={500}>
                    ({item.badge})
                  </Typography>
                </Box>
              )}
            </Box>
          </Tooltip>
        );
      })}
    </>
  );
};

export default Menu;
