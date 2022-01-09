import React from "react";
import {
  FaReact,
  FaDatabase,
  FaEthereum,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";
const skillList = [
  {
    name: "React",
    desc: "Next.js, CRA, React-Router + TypeScript",
    icon: <FaReact className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />,
  },
  {
    name: "HTML and CSS",
    desc: "Tailwind CSS or Material UI + The DOM",
    icon: <FaHtml5 className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />,
  },
  {
    name: "Node JS",
    desc: "Server-side APIs + Hardhat scripts and tests",
    icon: <FaNodeJs className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />,
  },
  {
    name: "Moralis",
    desc: "DB, Web3API + Business logic in the cloud",
    icon: <FaDatabase className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />,
  },
  {
    name: "Solidity/EVM",
    desc: "Smart contract security, EVM chains, OpenZeppelin contracts, Hardhat + Ethers.js",
    icon: <FaEthereum className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />,
  },
  {
    name: "Ethers.js/Web3.js",
    desc: "Hardhat scripts + front end contract interactions",
    icon: (
      <SiWeb3Dotjs className="text-emerald-300 w-24 h-24 xl:w-40 xl:h-40" />
    ),
  },
];
export default skillList;
