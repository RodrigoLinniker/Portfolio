import { AiOutlineMail } from "react-icons/ai";
import { BsGear, BsListCheck, BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Logo from "../../assets/logo4.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full fixed z-10 top-0 flex bg-white dark:bg-gray-900 h-16 md:h-20">
      <div className="w-full flex max-w-[1240px] md:justify-between md:items-center max-md:flex-col max-md:bg-white dark:max-md:bg-gray-900 m-auto max-xl:px-4 ">
        <div>
          <img src={Logo} alt="" className="w-14 h-14 max-md:hidden mt-4" />
        </div>
        <div>
          <button onClick={() => setNavbarOpen(!navbarOpen)}>
            {" "}
            {navbarOpen ? (
              <IoMdClose className="w-10 h-10  md:hidden hover:text-red ml-3 mt-3" />
            ) : (
              <BsList className="w-10 h-10  md:hidden hover:text-red ml-3 mt-3" />
            )}
          </button>
          <div
            className={
              "md:flex md:flex-row md:gap-[94px] " +
              (navbarOpen ? "gap-[20px] flex flex-col mt-5 " : "max-md:hidden")
            }
          >
            <Link
              className=" cursor-pointer dark:text-white text-black hover:text-red dark:hover:text-red flex flex-row gap-2 items-center"
              to="skills"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              onClick={() => setNavbarOpen(false)}
            >
              <BsListCheck />
              Skills
            </Link>

            <Link
              className=" cursor-pointer  dark:text-white text-black hover:text-red dark:hover:text-red  flex flex-row gap-2 items-center"
              to="projects"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => setNavbarOpen(false)}
            >
              <BsGear />
              Projetos
            </Link>

            <Link
              className="cursor-pointer  dark:text-white text-black hover:text-red dark:hover:text-red  flex flex-row gap-2 items-center"
              to="contato"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={() => setNavbarOpen(false)}
            >
              <AiOutlineMail />
              Contato
            </Link>

            {theme === "light" ? (
              <MdDarkMode
                size={25}
                className=" cursor-pointer hover:text-red"
                onClick={() => setTheme("dark")}
              />
            ) : (
              <MdLightMode
                size={25}
                className="cursor-pointer hover:text-[#fde047]"
                onClick={() => setTheme("light")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
