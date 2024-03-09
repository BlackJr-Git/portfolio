import Logo from "../header/logo/logo";
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
          <p>
            Designed and built by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-red-500">
              Junior Asosa
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
