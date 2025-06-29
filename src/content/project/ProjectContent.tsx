import { Box, Pagination, Stack } from '@mui/material'
import ProjectTabs from './ProjectTabs'
import ProjectCard from './ProjectCard';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  createdDate: string;
  client: {
    name: string;
    avatar: string;
  };
  personInCharge: {
    name: string;
    avatar: string;
  };
  deadline: string;
  status: string;
}


interface ProjectContentProps {
  projects: Project[]; 

}

const ProjectContent:React.FC<ProjectContentProps> = ({projects}) => {

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [page, setPage] = useState(1);
  const projectsPerPage = 4;



   // Filter based on selected tab/status
  const filteredProjects = selectedStatus === "All"
    ? projects
    : projects.filter(p => p.status === selectedStatus);

  // Pagination logic
  const startIndex = (page - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  
  return (
    <>
    <Box  p={2}>
      <ProjectTabs selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
        
      
          {/* Project List */}
          <Box display="flex" flexDirection="column" gap={2} >
            {paginatedProjects.map((project) => (
              <ProjectCard   key={project.id}    project={project}/>
            ))}            
          </Box>

          
             <Stack mt={2} spacing={2} alignItems="center">
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Stack>          
         

       </Box>   
    </>
  )
}

export default ProjectContent