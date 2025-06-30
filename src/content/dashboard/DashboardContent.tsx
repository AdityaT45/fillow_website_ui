import { Box } from "@mui/material"
import LeftDashboardPanel from "./LeftDashboardPanel"
import RightDashboardPanel from "./RightPanel/RightDashboardPanel"



interface Banner {
  title: string; 
  subtitle: string;
  image: string;
  buttontext: string;

}

export interface EmailData {
  id: string;
  subject: string;
  profilePic: string;
  sender: string;
  date: string;
  snippet: string;
  read: boolean;
  attachments: {
    file: string;
    jpg: string;
  };
}

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

interface DashboardContentProps {
  banner: Banner;
  emails: EmailData[]; 
  progressData: ProgressData[];
  onProgress: OnProgress;
  impProjects: ImpProject[];
  messages: Message[];
}




const DashboardContent:React.FC<DashboardContentProps> = ({banner,emails,progressData,onProgress,impProjects,messages}) => {
  return (
    <>
    <Box
          display="flex"
          
          justifyContent="center"
          flexWrap="wrap"
          
          gap={1}
          maxWidth="auto" 
          width="100%"
          
          mt={1}
        >

          <LeftDashboardPanel banner={banner} emails={emails} />
          <RightDashboardPanel  progressData={progressData} onProgress={onProgress} impProjects={impProjects} messages={messages} />

        


       
          
          
        </Box>
    </>
  )
}

export default DashboardContent