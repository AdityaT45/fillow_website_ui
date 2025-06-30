import { Box, Chip, Divider, IconButton, LinearProgress, Typography } from '@mui/material';
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
            
           
            <Box >{ project.tags.map((tag,index)=>(
                <Chip key={index} label={tag} variant="outlined" color="primary" sx={{m:1}}/>
            ))}
            </Box>

            <LinearProgress
                    variant="determinate"
                    value={project.taskDone}
                    sx={{
                      height: 6,
                      borderRadius: 5,
                      my:1,
                      backgroundColor: "#f0f0f0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#886cc0",
                      },
                    }}
                  />

                  <Box display={"flex"} gap={1}>
            
              <Typography variant="caption">{project.taskDone} Task done</Typography><br/>
                <Typography variant="caption" ml={"auto"}>Due Date {project.dueDate} Task done</Typography><br/>
                    
            </Box>
           
            <Divider sx={{ my: 1 }} />

        </Box>
    </>
  )
}

export default ProjectDetail