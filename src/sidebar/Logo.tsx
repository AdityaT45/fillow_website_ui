
import { Box, Typography } from "@mui/material";

interface Company {
  name: string;
  logo: string;
  description: string;
}

interface LogoProps {
  company: Company;
}


const Logo:React.FC<LogoProps> = ({company}) => {
  return (
    <>
    <Box flex={1} display="flex" alignItems="center" sx={{ height: "60px", padding: "0 16px",  marginBottom: "16px" }}>
       <Box
  component="img"
  src={company.logo}
  alt={company.name}
  sx={{ height: "40px", width: "40px", borderRadius: "50%", marginRight: 1, objectFit: "cover" }}
/>
        <Box sx={{ display: { xs: "none", md: "flex"} ,flexDirection:"column" }}>
            <Typography variant="h5" sx={{fontWeight: "bold",color:"#4e3f68", marginBottom: "-3px"}}>
                {company.name} </Typography>
            <Typography variant="caption" color="textSecondary">
                {company.description} </Typography>
        </Box>
    </Box>
    </>
  )
}

export default Logo