import { Box, Button, Typography } from "@mui/material";
import ProjectDetail from "./ProjectDetail";

 interface ImpProject {
  company: string;
  profile: string;
  profilePic: string;
  title: string;
  tags: string[];
  taskDone: number;
  dueDate: string; 
}

interface ImportantProjectsProps {
    impProjects: ImpProject[];
}

const ImportantProjects:React.FC<ImportantProjectsProps> = ({impProjects}) => {
  return (
    <>
    <Box  p={2} mt={1} display="flex" width="50%" alignItems="center" bgcolor="#fff" borderRadius={2} boxShadow={2}>
    <Box display={"flex"} flexDirection="column" flex={1} >
    <Typography variant="h6" >      Important Projects </Typography>
    <Typography variant="caption" >      Lorem ipsum dolor sit amet </Typography>

    {impProjects.map((project, index) => (
        <ProjectDetail key={index} project={project} />
    ))}

    <Box display="flex"  justifyContent="center" >
        <Button sx={{borderRadius:"25px" ,textTransform: "none"}}  variant="outlined">pin other projects</Button>
    </Box>

</Box>
</Box>
    </>
  )
}

export default ImportantProjects