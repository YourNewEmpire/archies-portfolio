import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MailIcon } from "@heroicons/react/solid";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import Card from "../components/Card";
import Modal from "../components/Modal";
import introObject from "../lib/content/home";
import ContactButtons from "../components/ContactForm/ContactButtons";

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(introObject);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const cardItems = [
    {
      title: "About Me",
      body: "Learn About Me ",
      link: "/aboutme",
      img: "bg-about-card",
    },
    {
      title: "Projects",
      body: "View My Projects",
      link: "/projects",
      img: "bg-projects-card",
    },
    {
      title: "Contact",
      body: "Methods Of Contact",
      link: "/contact",
      img: "bg-contact-card",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-12">
        <h1 className="text-center text-xl md:text-4xl lg:text-5xl xl:text-8xl text-emerald-300 font-title">
          {introObject.title}
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-20 justify-center items-center">
        <div className="col-span-6 lg:col-span-8 font-body text-emerald-300 text-lg xl:text-3xl text-center flex flex-col items-center justify-center">
          {introObject.desc}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
            className="
            w-64 m-12 rounded-2xl font-semibold
          bg-emerald-300 text-slate-700 
            "
          >
            CONTACT
          </motion.button>
          <AnimatePresence
            // Disable any initial animations on children that
            // are present when the component is first rendered
            initial={false}
            // Only render one component at a time.
            // The exiting component will finish its exit
            // animation before entering component is rendered
            exitBeforeEnter={true}
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal handleClose={close}>
                <ContactButtons />
              </Modal>
            )}
          </AnimatePresence>
        </div>
        <div className="col-span-2 lg:col-span-4 p-4 flex items-center justify-center rounded-lg">
          <Image
            alt="profile-picture"
            src={"/indoors-picture.png"}
            width={400}
            height={400}
            className="rounded-full lg:w-64 lg:h-64"
          />
        </div>
        <div className="col-span-12 font-body text-emerald-300 text-3xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
            {introObject.cardItems.map((item, index) => (
              <div key={index}>
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
