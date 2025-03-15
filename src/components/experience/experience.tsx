"use client";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import {
  bppmeImage,
  creerpmeImage,
  raphyaHeaderImage,
  raphyaSection,
  itccProjectImage,
  cheatSheetImage,
  nawtechProjectImage,
  berceauImage,
} from "@/assets";

export default function ExperienceSection() {
  const data = [
    {
      title: "Quantum Vertex",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-md flex flex-col gap-3 font-normal mb-8">
            <p className="text-3xl mb-4">Fullstack Software Engineer</p>
            <p className="dark:text-neutral-400 text-xl mb-4">
              (July 2024 - Present)
            </p>
            <p className="flex items-center gap-2">
              - Integration of new features using front-end and back-end
              technologies (Next.js and Django) on web and mobile platforms.
            </p>
            <p className="flex items-center gap-2">
              - Design and development of an electronic signature web
              application.
            </p>
            <p className="flex items-center gap-2">
              - Collaboration with a multidisciplinary team to ensure on-time
              project delivery.
            </p>
            <p className="flex items-center gap-2">
              - Design and development of a real-time notification service for
              Continuum PME applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={bppmeImage}
              alt="Project Business Plan"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={creerpmeImage}
              alt="creer PME"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Raphya SARL",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-md flex flex-col gap-3 font-normal mb-8">
            <p className="text-3xl mb-4">
              Fullstack Web Developer and UI/UX Designer (Remote)
            </p>
            <p className="dark:text-neutral-400 text-xl mb-4">
              (June 2024 - January 2025)
            </p>
            <p className="flex items-center gap-2">
              - Conducting user tests to gather feedback and continuously
              improve designs
            </p>
            <p className="flex items-center gap-2">
              - Designing and developing attractive and user-friendly interfaces
            </p>
            <p className="flex items-center gap-2">
              - Participating in the complete redesign of a major website,
              increasing the average time spent on the site by 25%
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={raphyaHeaderImage}
              alt="raphya site hero section"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={raphyaSection}
              alt="raphya site section"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Freelance",
      content: (
        <div>
          <div className="text-neutral-800 text-md flex flex-col gap-3 dark:text-neutral-200 font-normal mb-8">
            <p className="text-3xl mb-4">
              Fullstack Web Developer and UI/UX Designer (Hybrid)
            </p>
            <p className="dark:text-neutral-400 text-xl mb-4">
              (March 2020 - Present)
            </p>
            <p className="flex items-center gap-2">
              - Optimizing website performance for speed and SEO
            </p>
            <p className="flex items-center gap-2">
              - Complete UX and UI solution design and Software architecture
              design
            </p>
            <p className="flex items-center gap-2">
              - Deploying applications on servers/VPS
            </p>
            <p className="flex items-center gap-2">
              - Project management using Agile and Scrum frameworks
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={itccProjectImage}
              alt="ITCC project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={cheatSheetImage}
              alt="the cheat sheet Projects"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={nawtechProjectImage}
              alt="nawtech project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={berceauImage}
              alt="berceau project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="experience">
      <Timeline data={data} />
    </div>
  );
}
