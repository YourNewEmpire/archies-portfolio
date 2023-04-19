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
    icon: <FaReact />,
  },
  {
    name: "HTML and CSS",
    desc: "Tailwind CSS or Styled Components + The DOM",
    icon: <FaHtml5 />,
  },
  {
    name: "Node JS",
    desc: "Server-side APIs + Hardhat scripts and tests",
    icon: <FaNodeJs />,
  },
  {
    name: "AWS",
    desc: "S3, EC2 and Amplify",
    icon: <FaDatabase />,
  },
  {
    name: "Solidity/EVM",
    desc: "Smart contract security, EVM chains, OpenZeppelin contracts, Hardhat + Ethers.js",
    icon: <FaEthereum />,
  },
  {
    name: "Ethers.js/Web3.js",
    desc: "Hardhat scripts + front end contract interactions",
    icon: <SiWeb3Dotjs />,
  },
];
export default skillList;
