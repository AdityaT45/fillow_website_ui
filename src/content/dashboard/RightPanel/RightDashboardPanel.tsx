import { Box } from '@mui/material'
import ProgressComponent from './ProgressComponent';
import ImportantProjects from './ImportantProjects';
import DashboardMessages from './DashboardMessages';

interface ProgressData {
  title:string;
  subtitle:string;
}

interface OnProgress {
  progress: number;
}

export interface ImpProject {
  company: string;
  profile: string;
  profilePic: string;
  title: string;
  tags: string[];
  taskDone: number;
  dueDate: string; 
}

interface Message {
  id: string;
  sender: string;
  profilePic: string;
  message: string;
  online: boolean;
  date: string; 
}


interface RightDashboardPanelProps {
  progressData: ProgressData[];
  onProgress: OnProgress;
  impProjects: ImpProject[];
  messages: Message[];
  
}

const RightDashboardPanel:React.FC<RightDashboardPanelProps> = ({progressData,onProgress,impProjects,messages}) => {
  return (
    <>
    <Box  p={2}            
        sx={{  
          width: {
            xs: "95%", 
            sm: "100%", 
            md: "48%"  
          }        }}      >

            <ProgressComponent progressData={progressData} onProgress={onProgress} />

            <ImportantProjects  impProjects={impProjects} />

            <DashboardMessages messages={messages} />
            


            
          </Box>
    </>
  )
}

export default RightDashboardPanel