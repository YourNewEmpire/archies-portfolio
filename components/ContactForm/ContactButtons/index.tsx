import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { MailIcon } from "@heroicons/react/solid";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
const ContactButtons = () => {
      return (
            <div>
                   <h1 className="text-center text-xl md:text-4xl lg:text-5xl xl:text-8xl text-emerald-300 font-title">
                  Contact Methods
                </h1>

                <div className="grid grid-flow-row gap-4 items-center justify-center">
                  <div className=" flex flex-row justify-center items-center">
                    <p className="p-6">Email me here:</p>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-28 h-28  "
                      href="mailto:archiesmyth26@googlemail.com"
                    >
                      <MailIcon />
                    </motion.a>
                  </div>

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
                  <h1 className="text-red-300 text-base">
                    Message Form Coming Soon
                  </h1>
                </div>
            </div>
      )
}

export default ContactButtons
