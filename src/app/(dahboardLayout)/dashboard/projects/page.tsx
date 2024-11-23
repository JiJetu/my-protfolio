import ProjectsPage from "@/components/page/dashboard/projects/ProjectsPage";
import { getAllProjects } from "@/services/ProjectsServices";

const Projects = async () => {
  const projects = await getAllProjects("isr");

  return <ProjectsPage initialProjects={projects?.data} />;
};

export default Projects;
