import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";
import { HomeIcon, MailIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";

type listItem = {
  id: number;
  text: string;
  link: string;
};

const Nav = () => {
  const router = useRouter();
  const listItems: listItem[] = [
    {
      id: 1,
      text: "About Me",
      link: "/aboutme",
    },
    {
      id: 2,
      text: "Projects",
      link: "/projects",
    },
    {
      id: 3,
      text: "Experience",
      link: "/experience",
    },
    {
      id: 4,
      text: "Contact",
      link: "/contact",
    },
  ];

  //todo - clean up after setting up responsive dropdown
  return (
    <div
      className="z-50
      bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 
      px-0 lg:px-1 rounded-r-lg 
      text-slate-700 text-left
      text-5xl font-semibold
      flex flex-col items-center justify-between 
      "
    >
      <nav
        className="
           w-full font-body
      "
      >
        <Link href="/" passHref>
          <motion.a
            whileHover={{ translateX: 15 }}
            className="block py-8 px-8  text-center"
            href="/"
          >
            <div className="flex items-center justify-center">
              <HomeIcon width={50} height={50} />
            </div>
          </motion.a>
        </Link>

        {listItems.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <motion.a
              whileHover={{ translateX: 15 }}
              className="block py-8 px-8 hover:cursor-pointer "
            >
              {item.text}
            </motion.a>
          </Link>
        ))}
      </nav>
wip
      <div className="ring-4 grid grid-flow-row grid-cols-4 gap-8">
        <MailIcon height={50} width={50} />
        <MailIcon height={50} width={50} />
        <MailIcon height={50} width={50} />
        <MailIcon height={50} width={50} />
      </div>
    </div>
  );
};

export default Nav;
