import HeroBanner from "@/components/hero-banner/hero-banner";
import TechStackSection from "@/components/tech-stack/tech-stack";
import ProjectsSection from "@/components/projects/projects";
import AboutMe from "@/components/about-me/about-me";
import ExperienceSection from "@/components/experience/experience";
export default function Home() {
  return (
    <main>
      <HeroBanner></HeroBanner>
      <AboutMe></AboutMe>
      <TechStackSection></TechStackSection>
      <ExperienceSection></ExperienceSection>
      <ProjectsSection></ProjectsSection>
    </main>
  );
}
