import Image from "next/image";
import { logo } from "@/assets";
import Logo from "../header/logo/logo";
import SocialNetwork from "../header/social-networks/social-network";
import Navbar from "../header/navbar/navbar";

function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-5xl m-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <Logo></Logo>
          </div>
          <div className="flex items-center justify-between gap-6 py-6">
            <p>+243 851 750 853</p>
            <p>juniorassosa@gmail.com</p>
          </div>
        </div>
        <div className="border-t-2 border-t-background flex md:flex-row flex-col items-center md:justify-between justify-center py-6">
          <Navbar></Navbar>
          <p>Designed and built by Junior Asosa</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
