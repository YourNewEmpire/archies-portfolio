import React from "react";
import useHovered from "../../../hooks/useHovered";
import { ArrowRightIcon } from "@heroicons/react/solid";

export interface IMoreDetails {
  href: string;
  text?: string;
}

const MoreDetails = ({ href, text }: IMoreDetails) => {
  const { isHovered, setHovered, onEnter, onLeave } = useHovered(false);

  return (
    <a
      className="
           flex flex-row space-x-2 items-center justify-center 
           rounded-sm ring-emerald-300 ring-2 p-2 xl:p-4
           text-emerald-300 text-base lg:text-2xl font-semibold
           transition-all duration-300
           hover:bg-emerald-700 ease-in-out
           "
      onMouseEnter={() => onEnter()}
      onMouseLeave={() => onLeave()}
      href={href}
    >
      {" "}
      <p>{text ? text : "More Details"}</p>
      <ArrowRightIcon
        className={isHovered ? "animate-pop" : "animate-none"}
        height={25}
        width={25}
      />
    </a>
  );
};

export default MoreDetails;
