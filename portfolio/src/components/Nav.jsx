import { useState } from "react";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  let menu = [
    { name: "Home", link: "#" },
    { name: "About", link: "#banner" },
    { name: "Work", link: "#work" },
    { name: "Service", link: "#services" },
    { name: "Facts", link: "#facts" },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="bg-[#2E2E37] shadow-md w-full fixed top-0 left-0 z-50">
        <div className="container lg:mx-auto lg:flex py-4 lg:px-20  items-center justify-between">
          <div className="cursor-pointer pl-4 sm:pl-8">
            <img src="/logo.png" alt="Logo" />
          </div>

          <div
            className="text-[#80DB66] text-3xl absolute right-0 top-7  cursor-pointer lg:hidden pr-4 sm:pr-8"
            onClick={toggleMenu}
          >
            {open ? <IoClose /> : <FiMenu />}
          </div>

          <ul
            className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-[#2E2E37] lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-10 transition-all duration-500 ease-in ${
              open
                ? "top-20 opacity-100"
                : "top-[-490px] lg:opacity-100 opacity-0"
            }`}
          >
            {menu.map((link, index) => (
              <li key={index} className="lg:ml-8 text-xl lg:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white font-semibold hover:text-[#80DB66] duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button>Download CV</Button>
          </ul>
        </div>
      </div>
    </header>
  );
}
