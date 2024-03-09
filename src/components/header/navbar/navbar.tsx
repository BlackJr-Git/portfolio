import Link from "next/link";
import SocialNetworks from "../social-networks/social-network";

function Navbar() {
  return (
    <nav className="md:flex gap-14 h-full items-center justify-center md:flex-row hidden">
      <ul className="flex gap-6 h-full items-center justify-center">
        <Link href={"/"}>Accueil</Link>
        <Link href={"/"}>A Propos</Link>
        <Link href={"/"}>Stack Technique </Link>
        <Link href={"/"}> Project </Link>
        <Link href={"/"}> Contact </Link>
      </ul>
      <SocialNetworks></SocialNetworks>
    </nav>
  );
}

export default Navbar;
