import { nawtechProjectImage, itccProjectImage } from "@/assets";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";

import ProjectCard from "./project-card";
function ProjectsSection() {
  return (
    <section className="py-24 px-3">
      <h2 className="text-4xl text-center py-6 font-bold">Projects </h2>
      <p className="text-xl text-center md:pb-12 pb-6 ">
        Things I’ve built so far
      </p>
      <div className="flex flex-col md:flex-row gap-12 flex-wrap items-center justify-center">
        <ProjectCard
          stack="React Js , Tailwind CSS , TypeScript"
          image={nawtechProjectImage}
          title="Nawtech E-commerce Shop"
          link="https://nawtech.vercel.app/"
          description="Developing a comprehensive e-commerce platform for phones, IT equipment, and bespoke development services to meet all tech-related needs."
        ></ProjectCard>

        <ProjectCard
          stack="Wordpress , Elementor "
          image={itccProjectImage}
          title="ITCC - RDC Showcase site"
          link="https://itcc-rdc.com/"
          description="Designed and deployed website for ITCC, a company specializing in cybersecurity, focusing on advanced security, SEO optimization, and responsive design."
        ></ProjectCard>

        
      </div>
    </section>
  );
}

export default ProjectsSection;
