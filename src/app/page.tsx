import HeroBanner from "@/components/hero-banner/hero-banner";
import TechStackSection from "@/components/tech-stack/tech-stack";
import ProjectsSection from "@/components/projects/projects";
export default function Home() {
  return (
    <main>
      <HeroBanner></HeroBanner>
      <TechStackSection></TechStackSection>
      <ProjectsSection></ProjectsSection>
    </main>
  );
}
