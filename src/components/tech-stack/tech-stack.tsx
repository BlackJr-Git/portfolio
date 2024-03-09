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
  tsIcon,
  nextIcon,
  nodeIcon,
  wordpressIcon
} from "@/assets";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoInstagram, logoGithub } from "ionicons/icons";


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
    title: "Typescript",
    icone: tsIcon,
  },
  {
    title: "React Js",
    icone: reactIcon,
  },
  {
    title: "Next Js",
    icone: nextIcon,
  },
  {
    title: "Node Js",
    icone: nodeIcon,
  },
  {
    title: "SASS",
    icone: sassIcon,
  },
  {
    title: "tailwind CSS",
    icone: tailwindIcon,
  },
  
  {
    title: "Wordpress",
    icone: wordpressIcon,
  },
  {
    title: "Git",
    icone: gitIcon,
  },
  {
    title: "Github",
    icone: githubIcon,
  },
  
];

function TechStackSection() {
  return (
    <section className="py-24 px-3">
      <div className="max-w-5xl m-auto">
        <h2 className="text-4xl text-center py-6 font-bold">My Tech Stack</h2>
        <p className="text-xl text-center md:pb-12 pb-6 "> Technologies I’ve been working with recently</p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {stack.map((item) => (
            <div key={item.title} className="bg-foreground md:w-28 w-20 h-20  md:h-28 flex items-center justify-center rounded-2xl drop-shadow-lg p-3"> 
              <Image src={item.icone} alt={item.title}></Image>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
