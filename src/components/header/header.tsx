import Navbar from "./navbar/navbar";
import Logo from "./logo/logo";
// import SocialNetworks from "./social-networks/social-network";
// import { ThemeToggle } from "./toggle-theme/toggle-theme";
import ThemeToggle from "./toggle-theme/toggle-theme";

function Header() {
  return (
    <header className="flex flex-row max-w-7xl m-auto justify-between py-6 my-12 mx-3">
      <Logo />
      <Navbar />
      <ThemeToggle />
    </header>
  );
}

export default Header;