import { JrPicture } from "@/assets";

import ProjectCard from "./project-card";
function ProjectsSection() {
  return (
    <section className="py-24 px-3">
      <h2 className="text-4xl text-center py-6 font-bold">Projects </h2>
      <p className="text-xl text-center md:pb-12 pb-6 ">Things I’ve built so far</p>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        <ProjectCard
          image={JrPicture}
          title="Junior Asosa new Portfolio"
          description="description"
        ></ProjectCard>

        <ProjectCard
          image={JrPicture}
          title="Nawtech E-commerce Shop"
          description="description"
        ></ProjectCard>
      </div>
    </section>
  );
}

export default ProjectsSection;
