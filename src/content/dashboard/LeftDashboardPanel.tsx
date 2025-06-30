import { Box } from '@mui/material'
import DashboardBanner from './DashboardBanner'
import ProjectStatistics from './ProjectStatistics';
import RecentEmails from './RecentEmails';
import ProjectRate from './ProjectRate';

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
interface LeftDashboardPanelProps {
  banner: Banner;
  emails: EmailData[]; 
}


const LeftDashboardPanel:React.FC<LeftDashboardPanelProps> = ({banner,emails}) => {
  return (
    <>
    <Box p={2}     
        sx={{width: {xs: "95%", sm: "100%", md: "48%"  }}}>

            <DashboardBanner banner={banner} />
            <ProjectStatistics />
            <ProjectRate />
            <RecentEmails emails={emails} />
        </Box>
    </>
  )
}

export default LeftDashboardPanel