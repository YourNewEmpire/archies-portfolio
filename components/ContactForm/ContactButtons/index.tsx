import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailIcon } from "@heroicons/react/solid";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
const ContactButtons = () => {
  return (
    <div className="text-emerald-300">
      <h1 className="text-center text-xl md:text-4xl lg:text-5xl xl:text-8xl text-emerald-300 font-title">
        Contact Methods
      </h1>

      <div className="grid grid-flow-row gap-4 p-2 font-body text-emerald-300 text-lg xl:text-3xl text-center items-center justify-center rounded-lg ">
        <div className=" flex flex-row justify-center items-center">
          <p className="p-6">Connect + Message me here:</p>
          <motion.a
            target="blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex text-center items-center justify-center "
            href="https://www.linkedin.com/in/archiesmyth26/"
          >
            <AiFillLinkedin size={100} />
          </motion.a>
          <motion.a
            target="blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex text-center items-center justify-center "
            href="https://twitter.com/EmpireYn"
          >
            <AiFillTwitterSquare size={100} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ContactButtons;
