import SkillsPage from "@/components/page/dashboard/skills/SkillsPage";
import { getAllSkills } from "@/services/SkillsServices";

const Projects = async () => {
  const skills = await getAllSkills("isr");

  return <SkillsPage initialSkills={skills?.data} />;
};

export default Projects;
