import { Box, Typography } from '@mui/material';
import React from 'react'


interface Footer {
  title: string;
  year: string;
  tagline: string;
}

interface FooterProps {
    footerdata: Footer;
    }

const Footer:React.FC<FooterProps> = ({footerdata}) => {
  return (
    <>
     <Box display="flex" flexDirection="column"  mt={4} p={2}>
    <Typography variant="caption" color="black" > {footerdata.title}</Typography>
    <Typography variant="caption" color="textSecondary" > {footerdata.year}</Typography>
    <Typography variant="caption" color="textSecondary" > {footerdata.tagline}</Typography>
    </Box>
    </>
  )
}

export default Footer