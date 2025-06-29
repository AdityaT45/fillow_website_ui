import { Box, Chip, Divider, Typography } from '@mui/material';
import React from 'react'

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
        <Box>
            <img src={project.profilePic} alt={project.profile} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
            <Typography variant='subtitle1'>{project.title}</Typography>
            <Typography variant='body2'>{project.company}</Typography>
            
            <Typography variant='caption'>Due: {project.dueDate}</Typography>
            <Box >{ project.tags.map((tag,index)=>(
                <Chip key={index} label={tag} variant="outlined" />
            ))}
            </Box>
            <Typography variant="caption">{project.taskDone}</Typography><br/>
            <Typography variant="caption">{project.dueDate}</Typography>
            <Divider sx={{ my: 1 }} />

        </Box>
    </>
  )
}

export default ProjectDetail