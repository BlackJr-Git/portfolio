import { JrPicture } from "@/assets";
import Image from "next/image";

function HeroBanner() {
  return (
    <section className="flex   items-center justify-center h-96 py-24 px-3">
      <div className="flex md:flex-row flex-col items-center justify-center max-w-5xl w-full ">
        <div className="md:w-1/2 w-full px-3 my-12">
          <p className="text-5xl font-bold">Hi , </p>
          <p className="text-5xl font-bold">My name is</p>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-red-500">Junior Asosa</h1>
          <p className="text-5xl font-bold">I build things for web</p>
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
