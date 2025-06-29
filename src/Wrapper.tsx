// Wrapper.tsx
import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import TopBar from "./topbar/TopBar";
import ContentWrapper from "./content/ContentWrapper";


interface Company {
  name: string;
  logo: string;
  description: string;
}

interface User {
  name: string;
  email: string;
  avatar: string;
  taskProgress: {
    completed: number;
    total: number;
  };
}

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
}

interface Footerdata {
  title: string;
  year: string;
  tagline: string;
}

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
  status: string // use literal types if fixed
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

 interface EmailData {
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

interface Message {
  id: string;
  sender: string;
  profilePic: string;
  message: string;
  online: boolean;
  date: string; 
}

interface WrapperProps {
  company: Company;
  user: User;
  sidebaritem: SidebarItem[];
  footerdata: Footerdata;
  projects: Project[]; 
  contacts: Contact[];
  banner: Banner; 
  emails: EmailData[]; 
  progressData: ProgressData[];
  onprogress: OnProgress;
  impProjects: ImpProject[];
  messages: Message[]; 
}

const Wrapper: React.FC<WrapperProps> = ({ company,user, sidebaritem, footerdata,projects,contacts,banner,emails,progressData,onprogress,impProjects,messages }) => {
  const [activeLabel, setActiveLabel] = useState("Project");
  return (
    <Box display="flex" >
      {/* Sidebar */}
      <Sidebar
        company={company}
        user={user}
        sidebaritem={sidebaritem}
        footerdata={footerdata}
        onSelect={setActiveLabel}
        activeLabel={activeLabel}
      />

      {/* Main Content Area */}
      <Box flexGrow={1} display="flex" flexDirection="column">
        {/* Topbar */}
        <TopBar activeLabel={activeLabel} user={user}/>

        {/* Content Wrapper */}
        <ContentWrapper activeLabel={activeLabel} projects={projects} contacts={contacts} banner={banner} emails={emails} progressData={progressData} onprogress={onprogress} impProjects={impProjects} messages={messages} />
      </Box>
    </Box>
  );
};

export default Wrapper;
