import Navbar from "./navbar/navbar";
import Logo from "./logo/logo";
// import SocialNetworks from "./social-networks/social-network";
import { ThemeToggle } from "./toggle-theme/toggle-theme";

function Header() {
  return (
    <header className="flex md:flex-row flex-col max-w-7xl m-auto justify-between py-6 my-12">
      <Logo />
      <Navbar />
      <ThemeToggle />
    </header>
  );
}

export default Header;
