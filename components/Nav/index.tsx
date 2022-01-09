import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import navItems from "../../lib/content/navItems";

const Nav = () => {
  const router = useRouter();

  //todo - clean up after setting up responsive dropdown
  return (
    <div
      className="z-30 
      bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 
      px-0 lg:px-1 rounded-r-lg 
      text-slate-700 text-left
      text-lg md:text-2xl xl:text-4xl font-semibold
      flex flex-col items-center justify-between 
      "
    >
      <nav
        className="
           w-full font-body  sticky top-0
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

        {navItems.map((item, index) => (
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
    </div>
  );
};

export default Nav;
