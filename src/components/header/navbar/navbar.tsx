import Link from "next/link";
import SocialNetworks from "../social-networks/social-network";

function Navbar() {
  return (
    <nav className="md:flex gap-14 h-full items-center justify-center md:flex-row hidden">
      <ul className="flex gap-6 h-full items-center justify-center">
        {/* <Link href={"/"}>Home</Link> */}
        <Link href={"/#about"}>About</Link>
        <Link href={"/#stack"}>Tech Stack </Link>
        <Link href={"/#experience"}>Work Experience</Link>
        <Link href={"/#projects"}> Projects </Link>
        <Link href={"/contact"}> Contact </Link>
      </ul>
      <SocialNetworks></SocialNetworks>
    </nav>
  );
}

export default Navbar;
