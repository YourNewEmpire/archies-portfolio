import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { introObject, cardItems } from "../lib/content/home";
import ContactButtons from "../components/ContactForm/ContactButtons";

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="m-6 lg:m-12">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-5xl xl:text-7xl text-emerald-300 font-title">
          {introObject.title}
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-20 justify-center items-center">
        <div className=" col-span-8  lg:col-span-6 p-4 flex items-center justify-center rounded-lg ">
          <div className=" w-40 h-40  lg:w-64 lg:h-64 xl:w-80 xl:h-80 relative">
            <Image
              priority={true}
              className="rounded-full"
              alt="profile-picture"
              src={"/profile.jpg"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="col-span-8 lg:col-span-6 font-body text-emerald-300 text-base lg:text-xl text-center flex flex-col space-y-2 items-center justify-center">
          <p>{introObject.desc}</p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
            className="
            p-2 lg:p-3 rounded-2xl font-semibold
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
            mode="wait"
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

        <div className=" col-span-8 lg:col-span-12 font-body text-emerald-300 text-3xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
            {cardItems.map((item, index) => (
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
