import BlogsPage from "@/components/page/dashboard/blogs/BlogsPage";
import { getAllBlogs } from "@/services/BlogsServices";

const Projects = async () => {
  const blogs = await getAllBlogs("isr");

  return <BlogsPage initialBlogs={blogs?.data} />;
};

export default Projects;
