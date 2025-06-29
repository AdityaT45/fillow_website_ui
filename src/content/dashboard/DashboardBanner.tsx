import { Box, Button, Typography } from "@mui/material";


interface Banner {
  title: string; 
  subtitle: string;
  image: string;
  buttontext: string;

}

interface DashboardBannerProps {
    banner: Banner;
    }


const DashboardBanner:React.FC<DashboardBannerProps> = ({banner}) => {
  return (
    <>
    <Box  p={4}  borderRadius={2}  display={"flex"}    gap={4}  boxShadow={2}  width={"100%"}
  sx={{
    background: 'linear-gradient(205deg, #876bbf, #aa6cc1)',
  }}
>

        <Box width={"50%"} display="flex" flexDirection="column" gap={1.5}>
        <Typography variant="h5" sx={{fontWeight:"bold",color:"#fff"}}>
        {banner.title} </Typography>
        <Typography variant="caption" sx={{color:"#fff"}} >{banner.subtitle} </Typography>
              <Button variant="contained"  sx={{ alignSelf: "flex-start" ,backgroundColor:"#fff",borderRadius:"25px",color:"#000"}}  >  {banner.buttontext} </Button>
        </Box>
<Box width={"45%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
    component="img"
    src={banner.image}
    alt="Banner Image"
    sx={{
      width: '100%',
      maxWidth:'170px',       // prevent it from becoming too large on big screens
      height: 'auto',
      borderRadius: 2,
      
      display: 'block',
      objectFit: 'cover',
    }}
  />
          
          </Box>
          </Box>
        

    
    </>
  )
}

export default DashboardBanner