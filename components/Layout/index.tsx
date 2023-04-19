import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import "tailwindcss/tailwind.css";
import { Childs } from "../../interfaces/children";
import Nav from "../Nav";

const Layout = ({ children }: Childs): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <div className="bg-slate-700">
      <Head>
        <title>Archies Portfolio</title>
        <meta property="og:type" content={"website"} />
      </Head>
      <div className="relative min-h-screen flex">
        <Nav />
        <div className="p-10 flex-1 bg-slate-700">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
