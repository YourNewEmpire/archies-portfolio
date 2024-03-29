import React from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import navItems from "../../lib/content/navItems";
import useHovered from "../../hooks/useHovered";
import NavButton from "./NavButton";

const Nav = () => {
  const { isHovered, setHovered, onEnter, onLeave } = useHovered(false);

  //todo - clean up after setting up responsive dropdown
  return (
    <header
      className="z-10
      bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 
      rounded-r-lg text-left
      text-xs md:text-2xl xl:text-4xl font-semibold
      flex flex-col items-center justify-between 
      
      "
    >
      <nav
        className="
            font-body  sticky top-0
      "
      >
        <Link href="/" passHref>
          {" "}
          <motion.button
            onMouseEnter={() => onEnter()}
            onMouseLeave={() => onLeave()}
            className="block w-full py-2 lg:py-8 lg:px-8 hover:cursor-pointer "
          >
            <div
              className={`flex items-center justify-center transition-all duration-200 ease-in-out  ${
                isHovered ? "translate-x-[16px]" : ""
              }`}
            >
              <HomeIcon className="h-[20px] w-[20px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]" />
            </div>
          </motion.button>
        </Link>
        {navItems.map((item, index) => (
          <div key={item.link}>
            <NavButton {...item} />
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
