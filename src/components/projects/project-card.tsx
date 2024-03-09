import Image, { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-Card";


function ProjectCard({
  image,
  title,
  description,
  stack,
  link
}: {
  image: StaticImageData;
  title: string;
  description: string;
  stack : string,
  link : string
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="dark:bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-foreground dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold dark:text-slate-800 text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="dark:text-slate-700 text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-2 py-2 rounded-xl text-sm font-normal text-white dark:text-background"
          >
            Stack : {stack}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl dark:bg-background bg-white text-black dark:text-white text-md font-bold"
          >
            <a href={link}>Visite</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ProjectCard;
