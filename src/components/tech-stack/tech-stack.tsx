import Image from "next/image";
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  tailwindIcon,
  sassIcon,
  gitIcon,
  githubIcon,
} from "@/assets";

type StackType = {
  title: string;
  icone: string;
}[];

const stack: StackType = [
  {
    title: "html",
    icone: htmlIcon,
  },
  {
    title: "CSS",
    icone: cssIcon,
  },
  {
    title: "Javascript",
    icone: jsIcon,
  },
  {
    title: "React Js",
    icone: reactIcon,
  },
  {
    title: "Git",
    icone: gitIcon,
  },
  {
    title: "Github",
    icone: githubIcon,
  },
  {
    title: "SASS",
    icone: sassIcon,
  },
  {
    title: "tailwind CSS",
    icone: tailwindIcon,
  },
];

function TechStackSection() {
  return (
    <section className="py-24 px-3">
      <div className="max-w-5xl m-auto">
        <h2 className="text-4xl text-center py-6 font-bold">My Tech Stack</h2>
        <p className="text-xl text-center pb-12"> Technologies I’ve been working with recently</p>
        <div className="flex flex-wrap items-center justify-center gap-12 py-20">
          {stack.map((item) => (
            <div key={item.title}>
              <Image src={item.icone} alt={item.title}></Image>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
