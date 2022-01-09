import type { NextPage } from "next";
import Image from "next/image";
import skillList from "../lib/content/about/skills";
import RevealBox from "../components/RevealBox";
import certs from "../lib/content/about/certs";
import MoreDetails from "../components/Buttons/MoreDetails";
import { FaExternalLinkAlt } from "react-icons/fa";

import { SiWeb3Dotjs } from "react-icons/si";

const AboutMe: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen">
        <div className="m-12">
          <h1 className="text-center text-xl md:text-4xl lg:text-5xl xl:text-8xl text-emerald-300 font-title">
            {" "}
            About Me!
          </h1>
        </div>
        <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-12 gap-20 justify-center items-center ">
          <div
            className="col-span-1 xl:col-span-4 
          p-0 xl:p-4 flex flex-col 
          items-center justify-center 
          space-y-2 rounded-lg"
          >
            <Image
              priority
              alt="profile-picture"
              src={"/indoors-picture.png"}
              width={400}
              height={400}
              className="rounded-full w-64 h-64"
            />
            <h1 className="text-4xl text-emerald-300 font-semibold">
              Archie Smyth
            </h1>
            <p className="text-lg text-emerald-500">
              Full Stack Web3 Developer
            </p>
          </div>
          <div
            className="col-span-1 xl:col-span-8 font-body 
          text-emerald-300 text-xl xl:text-3xl text-center 
          flex flex-col items-center justify-center
       
          "
          >
            <p>
              Hi, I am Archie, currently working on personal projects to fulfill
              my ambition on becoming a full-stack web3 developer. Scroll to
              find out more about my skills, experience, qualifications,
              interests and more.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <RevealBox>
          <div className="m-12">
            <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-8xl text-emerald-300 font-title">
              {" "}
              Skills
            </h1>
          </div>
        </RevealBox>
        <RevealBox>
          <div className="grid grid-flow-row grid-cols-3 gap-4 lg:gap-10 xl:gap-24 p-2 xl:p-12 items-center justify-center ">
            {skillList.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center space-y-2 "
              >
                <div className="w-24 h-24 xl:w-40 xl:h-40">{skill.icon}</div>

                <h1 className="text-lg xl:text-4xl text-emerald-300 font-semibold">
                  {skill.name}
                </h1>
                <p className="text-emerald-500 text-xs xl:text-base">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealBox>
        <RevealBox>
          <div className="m-12">
            <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-8xl text-emerald-300 font-title">
              {" "}
              Certifications
            </h1>
          </div>
        </RevealBox>
        <RevealBox>
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
        </RevealBox>
      </div>
    </>
  );
};

export default AboutMe;
