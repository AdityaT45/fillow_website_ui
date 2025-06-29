import { Avatar, Box, Chip, Typography } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import React from 'react';

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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
        p: 3,
        borderRadius: 3,
        boxShadow:"0 1px 4px rgba(0,0,0,0.08)",
        bgcolor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        
      }}
    >
      {/* Project Info */}
      <Box sx={{ flex: 2, minWidth: 200 }}>
        <Typography variant="caption" color="text.secondary">
          {project.id}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created on: {project.createdDate}
        </Typography>
      </Box>

      {/* Client Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1, minWidth: 180 }}>
        <Avatar src={project.client.avatar} alt={project.client.name} sx={{ width: 40, height: 40 }} />
        <Box>
          <Typography variant="caption" color="text.secondary">
            Client
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            {project.client.name}
          </Typography>
        </Box>
      </Box>

      {/* Person In Charge */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1, minWidth: 180 }}>
        <Avatar src={project.personInCharge.avatar} alt={project.personInCharge.name} sx={{ width: 40, height: 40 }} />
        <Box>
          <Typography variant="caption" color="text.secondary">
            Person in charge
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            {project.personInCharge.name}
          </Typography>
        </Box>
      </Box>

      {/* Deadline */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1, minWidth: 180 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: '#886cc0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FlashOnIcon sx={{ color: '#fff', fontSize: 20 }} />
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Deadline
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            {project.deadline}
          </Typography>
        </Box>
      </Box>

      {/* Status */}
      <Box sx={{ minWidth: 120 }}>
        <Chip
          label={project.status}
          sx={{
            bgcolor: '#f2eaff',
            color: '#886cc0',
            fontWeight: 500,
            borderRadius: '8px',
          }}
        />
      </Box>
    </Box>
  );
};

export default ProjectCard;
