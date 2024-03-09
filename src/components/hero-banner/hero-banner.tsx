import { JrPicture } from "@/assets";
import Image from "next/image";
import { AnimatedText } from "../animations/animated-text";

function HeroBanner() {
  return (
    <section className="flex items-center justify-center h-96 my-24 px-3">
      <div className="flex md:flex-row flex-col items-center justify-center max-w-5xl w-full ">
        <div className="md:w-1/2 w-full my-12">
          <p className="text-5xl font-bold md:text-left text-center">Hi , </p>
          <p className="text-5xl font-bold md:text-left text-center">My name is</p>
          <h1 className="text-center md:text-left text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-red-500">
            {/* Junior Asosa */}
            <AnimatedText
            once
            text="Junior Asosa"
            el="h1"
            className="text-5xl"
          />
          </h1>
          <p className="text-5xl font-bold text-center md:text-left">I build some cool things for web</p>
        </div>
        <div className="md:w-1/2 w-full flex items-end md:justify-end justify-center ">
          <div className="w-64 rounded-full border-8 relative border-foreground">
            <Image
              className="rounded-full"
              src={JrPicture}
              alt="junior asosa picture"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
