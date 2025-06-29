import { Box } from "@mui/material";

import ProjectContent from "./project/ProjectContent";
import DashboardContent from "./dashboard/DashboardContent";
import KanbanContent from "./KanbanContent";
import AnalyticsContent from "./AnalyticsContent";
import CalenderContent from "./CalenderContent";
import MessagesContent from "./MessagesContent";
import ContactContent from "./contact/ContactContent";

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

interface Contact {
  id: string;
  name: string;
  company:string;
  ProfilePicture: string;
}
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

interface ContentWrapperProps {
  activeLabel: string;
  projects: Project[]; 
  contacts: Contact[];
  banner: Banner;
  emails: EmailData[]; 
  progressData: ProgressData[];
  onprogress: OnProgress;
  impProjects: ImpProject[];
  messages: Message[];
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ activeLabel,projects,contacts,banner,emails,progressData,onprogress,impProjects,messages }) => {
  const renderContent = () => {
    switch (activeLabel) {
      case "Dashboard":
        return <DashboardContent banner={banner} emails={emails} progressData={progressData} onProgress={onprogress} impProjects={impProjects} messages={messages} />;
      case "Project":
        return <ProjectContent projects={projects}/>;

        case "Contacts":
        return <ContactContent contacts={contacts}/>;
      
      case "Kanban":
        return <KanbanContent/>;
      case "Contact":
        return <KanbanContent/>;
      case "Analytics":
        return <AnalyticsContent/>;
      case "Calendar":
        return <CalenderContent/>;
      case "Messages":
        return <MessagesContent/>;

      default:
        return <div>Select a menu item</div>;
    }
  };
  return (
    <>
      <Box p={2} pt={0} flexGrow={1}  overflow="auto" bgcolor="#f9f9f9 " sx={{
    overflowY: 'auto', // or 'scroll' if needed
    scrollbarWidth: 'none', // Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // Chrome, Safari
    },
  }}>
        {/* Filter/Tab Section */}

        {renderContent()}
      </Box>
    </>
  );
};

export default ContentWrapper;
