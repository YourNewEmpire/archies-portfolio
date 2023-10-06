import React from "react";
import {
  FaReact,
  FaDatabase,
  FaEthereum,
  FaHtml5,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";

import { SiSupabase, SiSvelte } from "react-icons/si";
const skillList = [
  {
    name: "HTML and CSS",
    desc: "Tailwind CSS or Styled Components + The DOM",
    icon: <FaHtml5 />,
  },
  {
    name: "React",
    desc: "Next.js, Vite, React-Router + TypeScript",
    icon: <FaReact />,
  },
  {
    name: "Svelte",
    desc: "Sveltekit, my favourite framework 🎯",
    icon: <SiSvelte />,
  },
  {
    name: "Node JS",
    desc: "API routes in Sveltekit / Next.js + API interaction",
    icon: <FaNodeJs />,
  },
  {
    name: "AWS",
    desc: "S3, EC2 and Amplify",
    icon: <FaAws />,
  },
  {
    name: "Supabase",
    desc: "PostgreSQL DB + User auth",
    icon: <SiSupabase />,
  },
];
export default skillList;
