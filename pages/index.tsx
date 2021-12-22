import type { NextPage } from "next";
import Image from "next/image";
import Card from "../components/Card";

const Home: NextPage = () => {
  const cardItems = [
    {
      title: "About Me",
      body: "Learn About Me ",
      link: "/aboutme",
      img: "bg-the-coast",
    },
    {
      title: "Projects",
      body: "View My Projects",
      link: "/projects",
      img: "bg-projects-card",
    },
    {
      title: "Experience",
      body: "View My Projects",
      link: "/experience",
      img: "projects-card",
    },
    {
      title: "Contact",
      body: "Methods Of Contact",
      link: "/contact",
      img: "projects-card",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-12">
        <h1 className="text-center text-8xl text-emerald-300 font-title">
          Hi I&#39;m Archie, a Web3 Developer!
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-12 gap-20 justify-center items-center">
        <div className="col-span-8 font-body text-emerald-300 text-3xl text-center flex flex-col items-center justify-center">
          I specialise in developing, designing and deploying frontends and
          backends for Web3 startups. You need to ship a DAPP quickly? I have
          you covered. I am mostly self-taught, though I have obtained certifications for Web3 development.
          <button className="
           w-64 rounded-full m-12 
          bg-emerald-300 text-slate-700 transition duration-200 shadow-md hover:shadow-emerald-400">
            CONTACT wip
          </button>
        </div>
        <div className="col-span-4 p-4 flex items-center justify-center rounded-lg">
          <Image
            alt="profile-picture"
            src={"/indoors-picture.png"}
            width={400}
            height={400}
            className="rounded-full w-64 h-64"
          />
        </div>
        <div className="col-span-12 font-body text-emerald-300 text-3xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8">
            {cardItems.map((item, index) => (
              <div key={index}  >
                <Card {...item}  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
