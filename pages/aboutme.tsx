import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import skillList from "../lib/content/about/skills";
import certs from "../lib/content/about/certs";
import jobs from "../lib/content/about/jobs";
import MoreDetails from "../components/Buttons/MoreDetails";
import {
  opacityAnimation,
  opacityExit,
  opacityInitial,
} from "../lib/animations";
const AboutMe: NextPage = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-start min-h-screen  ">
        <div className="m-12">
          <h1 className="text-center  text-2xl sm:text-3xl lg:text-5xl xl:text-7xl text-emerald-300 font-title">
            {" "}
            About Me!
          </h1>
        </div>
        <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 justify-center items-center ">
          <div
            className="col-span-1 xl:col-span-4 
          p-0 xl:p-4 flex flex-col 
          items-center justify-center 
          space-y-2 rounded-lg"
          >
            <div className=" w-40 h-40  lg:w-56 lg:h-56 xl:w-72 xl:h-72 relative">
              <Image
                className="rounded-full"
                alt="profile-picture"
                src={"/profile.jpg"}
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-emerald-300 font-semibold">
              Archie Smyth
            </h1>
            <p className="text-base lg:text-lg text-emerald-500">
              Full Stack Web Developer
            </p>
          </div>
          <div
            className=" col-span-1 xl:col-span-8 font-body 
          text-emerald-300 text-lg xl:text-3xl text-center 
          flex flex-col items-center justify-center
       
          "
          >
            <p>
              Hi, I am Archie, currently working on personal projects to fulfil
              my ambition on becoming a full-stack web developer. Scroll to find
              out more about my skills, experience, qualifications, interests
              and more.
            </p>
          </div>
        </div>
      </section>
      <motion.div
        initial={opacityInitial}
        whileInView={opacityAnimation}
        exit={opacityExit}
      >
        <section className="flex flex-col items-center justify-center text-center min-h-screen space-y-8 lg:space-y-24">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-7xl text-emerald-300 font-title ">
            {" "}
            Skills
          </h1>

          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 xl:gap-24 p-2 xl:p-12 items-center justify-center ">
            {skillList.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center space-y-2 "
              >
                <div className="text-lg xl:text-4xl text-emerald-300">
                  {skill.icon}
                </div>

                <h1 className="text-lg xl:text-4xl text-emerald-300 font-semibold">
                  {skill.name}
                </h1>
                <p className="text-emerald-500 text-xs xl:text-base">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={opacityInitial}
        whileInView={opacityAnimation}
        exit={opacityExit}
      >
        <section className="flex flex-col items-center justify-center text-center min-h-screen space-y-8 lg:space-y-24">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-7xl text-emerald-300 font-title">
            {" "}
            Certifications
          </h1>

          <div className="flex flex-col justify-center items-center space-y-8 xl:space-y-12">
            <ol className="list-disc list-inside text-lg xl:text-2xl text-emerald-300 text-left grid grid-flow-row grid-cols-1 xl:grid-cols-3 gap-8">
              {certs.map((cert, index) => (
                <li key={index}>
                  <a
                    className="underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={cert.link}
                  >
                    {cert.name}
                  </a>
                </li>
              ))}
            </ol>
            <MoreDetails
              text="View All on Google Drive"
              href={
                "https://drive.google.com/drive/folders/1mA4y17s9IqFUFDr3V1OYaq5gPBrxUsBV?usp=sharing"
              }
            />
          </div>
        </section>
      </motion.div>
      <motion.div
        initial={opacityInitial}
        whileInView={opacityAnimation}
        exit={opacityExit}
      >
        <section className="flex flex-col items-center justify-center text-center min-h-screen space-y-8 lg:space-y-24">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-7xl text-emerald-300 font-title">
            {" "}
            Experience
          </h1>

          <div className="flex flex-col justify-center items-center space-y-8 xl:space-y-12">
            <ol className="list-disc list-inside text-lg xl:text-2xl text-emerald-300 text-left grid grid-flow-col grid-cols-1">
              {jobs.map((job, index) => (
                <li key={index}>
                  {" "}
                  <span className="font-semibold">{job.name}.</span> {job.text}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutMe;
