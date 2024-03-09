import HeroBanner from "@/components/hero-banner/hero-banner";
import TechStackSection from "@/components/tech-stack/tech-stack";
import ProjectsSection from "@/components/projects/projects";
import AboutMe from "@/components/about-me/about-me";
export default function Home() {
  return (
    <main>
      <HeroBanner></HeroBanner>
      <AboutMe></AboutMe>
      <TechStackSection></TechStackSection>
      <ProjectsSection></ProjectsSection>
    </main>
  );
}
