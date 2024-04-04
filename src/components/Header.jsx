import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo1.svg";

function Header() {
  const [open, setOpen] = useState(false);

  function handleNav() {
    setOpen(!open);
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b border-transparent bg-gray-900/5 backdrop-blur-xl">
      <nav className="flex items-center justify-between w-full p-4 mx-auto max-w-7xl md:px-8">
        <div className="font-bold text-gray-200 md:text-2xl">
          <a href="#">
            {/* WKK */}
            <img src={logo} alt="" className="w-[35px] md:w-[45px]" />
          </a>
        </div>
        <ul className="items-center hidden gap-10 list-none md:flex">
          <li>
            <a
              href="#"
              className="font-medium text-gray-200 transition-all hover:text-gray-400 active:text-gray-600"
              target="_self"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-medium text-gray-200 transition-all hover:text-gray-400 active:text-gray-600"
              target="_self"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-medium text-gray-200 transition-all hover:text-gray-400 active:text-gray-600"
              target="_self"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-medium text-gray-200 transition-all hover:text-gray-400 active:text-gray-600"
              target="_self"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="block text-gray-200 md:hidden" onClick={handleNav}>
          {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div
          className={
            open
              ? "fixed left-0 top-0 w-[70%] h-screen bg-gray-900 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 h-screen ease-in-out duration-500"
          }
        >
          <ul className="flex flex-col gap-10 px-5 py-12 uppercase bg-gray-900">
            <li className="pb-4 border-b border-gray-600" onClick={handleNav}>
              <a
                href="#"
                className="font-medium text-gray-200 transition-all hover:text-gray-400 active:text-gray-600"
                target="_self"
              >
                Home
              </a>
            </li>
            <li className="pb-4 border-b border-gray-600" onClick={handleNav}>
              <a
                href="#projects"
                className="font-medium text-gray-200 transition-all hover:text-gray-400 active:text-gray-600"
                target="_self"
              >
                Projects
              </a>
            </li>
            <li className="pb-4 border-b border-gray-600" onClick={handleNav}>
              <a
                href="#about"
                className="font-medium text-gray-200 transition-all hover:text-gray-400 active:text-gray-600"
                target="_self"
              >
                About
              </a>
            </li>
            <li className="pb-4 border-b border-gray-600" onClick={handleNav}>
              <a
                href="#contact"
                className="font-medium text-gray-200 transition-all hover:text-gray-400 active:text-gray-600"
                target="_self"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
