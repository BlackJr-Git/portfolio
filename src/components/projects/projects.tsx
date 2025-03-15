import {
  nawtechProjectImage,
  itccProjectImage,
  cheatSheetImage,
  berceauImage,
  bppmeImage,
} from "@/assets";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

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

export default AnimatedTestimonialsDemo;

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    // {
    //   quote:
    //     "Developing a comprehensive e-commerce platform for phones, IT equipment, and bespoke development services to meet all tech-related needs.",
    //   name: "Nawtech E-commerce Shop",
    //   designation: "Product Manager at TechFlow",
    //   src: nawtechProjectImage.src,
    //   stack: ["React JS", "Tailwind CSS", "Javascript"],
    // },
    {
      quote:
        "Designed, implemented, and deployed website for ITCC, a company specializing in cybersecurity, focusing on advanced security, SEO optimization, and responsive design.",
      name: "ITCC RDC - Showcase site",
      designation: "Showcase site",
      src: itccProjectImage.src,
      stack: ["Wordpress", "Elementor"],
    },
    {
      quote:
        "Designed, implemented, and deployed a web platform using Next.js for the front-end, Clerk for authentication, PostgreSQL for data management. The site allows users to access useful resources in various fields. Deployed on Vercel, it ensures fast, secure navigation and is built on a scalable architecture.",
      name: "The cheat sheet - Web App",
      designation: "Web App",
      src: cheatSheetImage.src,
      stack: ["Next JS", "Tailwind CSS", "TypeScript", "Postgres SQL", "Clerk"],
    },
    {
      quote:
        "Development and deployment of the BERCEAU (Congolese Bureau of Studies and Research in Environment, Architecture, and Urbanism) showcase website. Designed and implemented a modern interface, including a blog section for content sharing. Built with WordPress, the site provides smooth navigation and optimized content management.",
      name: "Berceau RDC - Showcase site",
      designation: "Showcase site",
      src: berceauImage.src,
      stack: ["Wordpress", "Elementor"],
    },
    {
      quote:
        "As part of the Continuum PME project, collaborated with a multidisciplinary team to develop a platform that allows users to create complete business plans and generate a PDF of them. I worked on the backend stack using Django and the frontend with Next.js. The platform also includes an AI-powered writing assistance feature to guide users in drafting their documents.",
      name: "Business Plan - Web App",
      designation: "Web App",
      src: bppmeImage.src,
      stack: ["Next JS", "Django", "Docker", "Postgres SQL"],
    },
  ];
  return (
    <>
      <h2 className="text-4xl text-center py-6 font-bold">Projects </h2>
      <p className="text-xl text-center md:pb-12 pb-6 w-1/2 mx-auto">
        Here is a selection of my projects, reflecting my expertise in web
        development and ability to create solutions that meet specific needs.
      </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
