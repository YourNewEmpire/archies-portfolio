import type { NextPage } from "next";
import Image from "next/image";
import {
  FaReact,
  FaDatabase,
  FaEthereum,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";
import RevealBox from "../components/RevealBox";


const AboutMe: NextPage = () => {

//todo - add items to lib
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
          <div className="col-span-1 xl:col-span-8 font-body text-emerald-300 text-xl xl:text-3xl text-center flex flex-col items-center justify-center">
            Hi, I am Archie, currently working on personal projects to fulfill
            my ambition on becoming a full-stack web3 developer. Scroll to find
            out more about my skills, experience, qualifications, interests and
            more.
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
            <div className="flex flex-col justify-center items-center space-y-2 ">
              <FaReact className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />
              <h1 className="text-lg xl:text-4xl text-emerald-300 font-semibold">
                React
              </h1>
              <p className="text-emerald-500 text-xs xl:text-base">
                Next.js, CRA, React-Router + TypeScript
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 ">
              <FaHtml5 className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />
              <h1 className="text-lg xl:text-4xl text-emerald-300 font-semibold">
                HTML and CSS
              </h1>
              <p className="text-emerald-500 text-xs xl:text-base">
                Tailwind CSS or Material UI + The DOM
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 ">
              <FaNodeJs className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />
              <h1 className="text-lg xl:text-4xl text-emerald-300 font-semibold">
                Node JS
              </h1>
              <p className="text-emerald-500  text-xs xl:text-base">
                Server-side APIs + Hardhat scripts and tests
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 ">
              <FaDatabase className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />
              <h1 className="text-lg xl:text-4xl text-emerald-300 font-semibold">
                <Image
                  src={"/Moralis_Logo/SVG/iconlight.svg"}
                  alt="moralis-icon"
                  width={25}
                  height={25}
                />{" "}
                Moralis
              </h1>
              <p className="text-emerald-500 text-xs xl:text-base">
                DB, Web3API + Business logic in the cloud
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 ">
              <FaEthereum className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />
              <h1 className="text-lg xl:text-4xl text-emerald-300 font-semibold">
                Solidity/EVM
              </h1>
              <p className="text-emerald-500  text-xs xl:text-base">
                Smart contract security, EVM chains, OpenZeppelin contracts,
                Hardhat + Ethers.js
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-2 ">
              <SiWeb3Dotjs className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />
              <h1 className="text-lg xl:text-4xl text-emerald-300 font-semibold">
                Ethers.JS / Web3.JS
              </h1>
              <p className="text-emerald-500 text-xs xl:text-base">
                Hardhat scripts + front end contract interactions
              </p>
            </div>
          </div>
        </RevealBox>
      </div>
    </>
  );
};

export default AboutMe;
