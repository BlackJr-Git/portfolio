import Image from "next/image";
import { logo  } from "@/assets";

function Logo() {
  return (
    <div>
      <Image src={logo} width={100} height={50} alt="junior asosa logo"></Image>
    </div>
  );
}

export default Logo;
