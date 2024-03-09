import { JrPicture } from "@/assets";
import Image from "next/image";
// import { AnimatedText } from "../animations/animated-text";
import { lazy } from "react";
import { Suspense } from "react";

// const AnimatedText  = lazy(
//   () => import(require("../animations/animated-text"))
// );

const AnimatedText = lazy(() => import("../animations/animated-text"));

function HeroBanner() {
  return (
    <section className="flex items-center justify-center h-96 my-24 px-3">
      <div className="flex md:flex-row flex-col items-center justify-center max-w-5xl w-full ">
        <div className="md:w-1/2 w-full my-12">
          <p className="text-4xl md:text-5xl font-bold md:text-left text-center">
            Hi ,{" "}
          </p>
          <p className="text-4xl md:text-5xl font-bold md:text-left text-center">
            My name is
          </p>
          <div className="text-center md:text-left text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-red-500">
            <Suspense fallback={<div>Chargement...</div>}>
              <AnimatedText
                text="{ Junior Asosa }"
                el="h1"
                className=" text-4xl md:text-5xl"
              />
            </Suspense>
          </div>
          <p className="md:text-5xl text-4xl font-bold text-center md:text-left">
            I build some cool things for web
          </p>
        </div>
        <div className="md:w-1/2 w-full flex items-end md:justify-end justify-center ">
          <div className="flex items-center justify-center w-80 h-80 rounded-full bg-white bg-gradient-to-r from-blue-500 to-red-500  relative border-foreground">
            <Image
              className="rounded-full w-72"
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
