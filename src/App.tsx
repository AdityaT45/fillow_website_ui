import Wrapper from "./Wrapper"
import jsonData from "../data/data.json"

const App = () => {
  return (
    <>
    <Wrapper company={jsonData.company} sidebaritem={jsonData.sidebar} user={jsonData.user} footerdata={jsonData.footer} projects={jsonData.projects} contacts={jsonData.contacts} banner={jsonData.banner} emails={jsonData.emails} progressData={jsonData.progressData} onprogress={jsonData.onprogress}  impProjects={jsonData.impProjects} messages={jsonData.messages} />
    
    </>
  )
}

export default App