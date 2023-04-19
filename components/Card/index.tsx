import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/solid";
import useHovered from "../../hooks/useHovered";

interface CardProps {
  title: string;
  body: string;
  link: string;
  isImage?: boolean;
  img?: string;
}
const Card = ({ title, body, link, img }: CardProps) => {
  const { isHovered, setHovered, onEnter, onLeave } = useHovered(false);
  return (
    <Link href={link} passHref>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={` bg-cover bg-center rounded-md `}
      >
        <div
          onMouseEnter={() => onEnter()}
          onMouseLeave={() => onLeave()}
          className={`
          grid grid-flow-row grid-cols-1 grid-rows-8  justify-center items-center
          
          transition duration-200
          rounded-md
          ring-emerald-300
          hover:ring-2
          hover:shadow-xl 
          hover:cursor-pointer
          
          `}
        >
          <div className="row-span-6 flex justify-center items-center ">
            <h1 className="text-3xl lg:text-5xl text-center font-title my-6 lg:my-12">
              {title}
            </h1>
          </div>
          <div className="w-full rounded-b-md bg-slate-800 row-span-2">
            <div
              className="
          flex flex-row space-x-2 
          items-center justify-center 
          text-center text-sm lg:text-xl
          subpixel-antialiased"
            >
              <p>{body}</p>{" "}
              <ArrowRightIcon
                className={isHovered ? "animate-pop" : "animate-none"}
                height={25}
                width={25}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
