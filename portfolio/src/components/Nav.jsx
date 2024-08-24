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
    { name: "Fun Facts", link: "#fun-facts" },
    { name: "Price", link: "#price" },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 ">
      <div className="md:flex bg-[#2E2E37] py-4 md:px-20 px-20 items-center justify-between">
        <div className="cursor-pointer">
          <img src="/logo.png" alt="Logo" />
        </div>

        <div
          className="text-[#80DB66] text-3xl absolute right-20 top-7 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {open ? <IoClose /> : <FiMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#2E2E37] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {menu.map((link, index) => (
            <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
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
  );
}
