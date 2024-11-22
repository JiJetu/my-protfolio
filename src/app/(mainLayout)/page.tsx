import About from "@/components/page/home/About";
import Banner from "@/components/page/home/Banner";
import Contact from "@/components/page/home/Contact";
import Projects from "@/components/page/home/Projects";
import Resume from "@/components/page/home/Resume";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
