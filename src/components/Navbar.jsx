import { ReactSVG } from "react-svg";
import Logo from "../assets/images/logo.svg";
import DropdownFeatures from "./DropdownFeatures";
import DropdownCompany from "./DropdownCompany";
import iconMenu from "../assets/images/icon-menu.svg";
import iconMenuClose from "../assets/images/icon-close-menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* desktop version */}
      <nav className="flex justify-between lg:px-10 px-5 py-5 font-semibold opacity-90">
        <div className="flex lg:space-x-12 justify-between lg:justify-start w-full">
          <ReactSVG src={Logo} />
          <ReactSVG src={iconMenu} className="lg:hidden" onClick={openNavbar} />
          <ul className="lg:flex gap-10 hidden">
            <li>
              <DropdownFeatures />
            </li>
            <li>
              <DropdownCompany />
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className="lg:flex gap-10 hidden">
          <a href="#">Login</a>
          <a
            href="#"
            className="border border-black px-4 py-1.5 -mt-1.5 rounded-lg"
          >
            Register
          </a>
        </div>
      </nav>
      {isOpen && (
        <div className="bg-white h-screen absolute right-0 top-0 w-2/3 px-6 lg:hidden sm:w-1/2 md:w-1/4 z-10">
          <div className="flex justify-end py-3">
            <ReactSVG src={iconMenuClose} onClick={closeNavbar} />
          </div>
          <ul className="space-y-4">
            <li>
              <DropdownFeatures />
            </li>
            <li>
              <DropdownCompany />
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className="flex flex-col text-center mt-4 space-y-4">
            <a href="#">Login</a>
            <a href="#" className="border border-black py-1 rounded-xl">
              Register
            </a>
          </div>
        </div>
      )}
      {/* mobile version */}
    </>
  );
};

export default Navbar;
