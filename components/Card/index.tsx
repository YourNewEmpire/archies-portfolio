import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/solid";
interface CardProps {
  title: string;
  body: string;
  link: string;
  isImage?: boolean;
  img?: string;
}
const Card = ({ title, body, link, img }: CardProps) => {
  //* When span anchor title is hovered, save it as true, to stop anchor animation.
  const [cardHovered, setCardHovered] = useState(false);

  const onCardEnter = () => {
    setCardHovered(true);
  };
  const onCardLeave = () => {
    setCardHovered(false);
  };

  return (
    <Link href={link} passHref>
      <div
        onMouseEnter={() => onCardEnter()}
        onMouseLeave={() => onCardLeave()}
        className={`
grid grid-flow-row grid-cols-1 grid-rows-8  justify-center items-center
gap-2 md:gap-8 lg:gap-6
transition duration-200
 rounded-md
ring-emerald-300
hover:ring-2
hover:shadow-xl 
hover:cursor-pointer
bg-${img} bg-center bg-cover
`}
      >
        <div className="row-span-6 flex justify-center items-center ">
          <h1 className="text-5xl text-center font-title">{title}</h1>
        </div>
        <div className="w-full rounded-b-md bg-slate-800 row-span-2">
          <div className="flex flex-row space-x-2 items-center justify-center text-center subpixel-antialiased text-xl ">
            <p>{body}</p>{" "}
            <ArrowRightIcon
              className={cardHovered ? "animate-pop" : "animate-none"}
              height={25}
              width={25}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
