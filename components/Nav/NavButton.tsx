import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useHovered from "../../hooks/useHovered";
interface NavButtonProps {
  text: string;
  link: string;
}
const NavButton = ({ text, link }: NavButtonProps) => {
  const { isHovered, onEnter, onLeave } = useHovered(false);

  return (
    <div>
      <Link key={link} href={link} passHref>
        {" "}
        <motion.button
          onMouseEnter={() => onEnter()}
          onMouseLeave={() => onLeave()}
          className="block w-full py-2 lg:py-8 px-2 lg:px-8  hover:cursor-pointer "
        >
          <p
            className={` text-left transition-all duration-200 ease-in-out  ${
              isHovered ? "translate-x-[16px]" : ""
            }`}
          >
            {" "}
            {text}
          </p>
        </motion.button>
      </Link>
    </div>
  );
};

export default NavButton;
