import React from "react";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Childs } from "../../interfaces/children";
import Nav from "../Nav";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const Layout = ({ children }: Childs): JSX.Element => {
  return (
    <div className="  bg-slate-700">
      <Head>
        <title>Archies Portfolio</title>
        <link rel="icon" href="/icon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="relative min-h-screen flex">
        <Nav />
        <div className="p-10 flex-1 ">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
