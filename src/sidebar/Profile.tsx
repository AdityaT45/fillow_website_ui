import { Avatar, Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'


interface User {
  name: string;
  email: string;
  avatar: string;
  taskProgress: {
    completed: number;
    total: number;
  };
}

interface ProfileProps {
  user: User;
}

const Profile :React.FC<ProfileProps> = ({user}) => {
const progressPercent =
    user.taskProgress.total === 0
      ? 0
      : (user.taskProgress.completed / user.taskProgress.total) * 100;
  return (
    <>
    <Box display="flex" alignItems="center" gap={1} p={2}>
          <Avatar
            alt="User"
            src={user.avatar}
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              cursor: "pointer",
              border: "2px solid #fff",
              boxShadow: "0 0 0 2px #886cc0"
            }}
          />
          <Box>
           <Typography variant="h6" fontSize={16} fontWeight="bold" >
      {user.name}     </Typography>
    <Typography variant="subtitle1" fontSize={14} color="textSecondary">
      {user.email}    </Typography>
      </Box>
          </Box>
 
     
              <Box px={2}>
           
                <Typography variant="body2" mb={1}> 
        Task Progress: {user.taskProgress.completed} / {user.taskProgress.total}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={progressPercent}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#f0f0f0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#886cc0",
          },
        }}
      />
      
    </Box>
    </>
  )
}

export default Profile