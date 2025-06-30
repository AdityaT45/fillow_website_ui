import { Box, Chip, Divider, IconButton, Typography } from '@mui/material';
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

 interface ImpProject {
  company: string;
  profile: string;
  profilePic: string;
  title: string;
  tags: string[];
  taskDone: number;
  dueDate: string; 
}

interface ProjectDetailProps{
    project: ImpProject;

}


const ProjectDetail:React.FC<ProjectDetailProps> = ({project}) => {
  return (
    <>
        <Box >
          <Box display={"flex"} gap={4}>
            <img src={project.profilePic} alt={project.profile} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
             <Box display={"flex"} flexDirection={"column"}>
            <Typography variant='subtitle1'>{project.title}</Typography>
            <Typography variant='body2'>{project.company}</Typography>
            </Box>
            <Box sx={{ml:"auto"}}>
            <IconButton size="small">
          <MoreHorizIcon />
        </IconButton>
            </Box>
            </Box>
            
            <Typography variant='caption'>Due: {project.dueDate}</Typography>
            <Box >{ project.tags.map((tag,index)=>(
                <Chip key={index} label={tag} variant="outlined" />
            ))}
            </Box>
            <Typography variant="caption">{project.taskDone}</Typography><br/>
            <Divider sx={{ my: 1 }} />

        </Box>
    </>
  )
}

export default ProjectDetail