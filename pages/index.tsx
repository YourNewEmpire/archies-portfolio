import type { NextPage } from "next";
import Image from "next/image";
import Card from "../components/Card";
const Home: NextPage = () => {
  const cardItems = [
    {
      title: "About Me",
      body: "Learn More About Me ",
      link: "/aboutme",
      img: "the-coast",
    },
    {
      title: "Projects",
      body: "View My Projects",
      link: "/projects",
      img: "projects-card",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="">
        <h1 className="text-center text-8xl text-emerald-300 font-title">
          Hi I&#39;m Archie, a Web3 Developer!
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-12 gap-20 justify-center items-center">
        <div className="col-span-8 font-body text-emerald-300 text-3xl text-center flex flex-col">
          I specialise in developing, designing and deploying frontends and
          backends for Web3 startups. You need to ship a DAPP quickly? I have
          you covered. I am mostly self-taught, though I have obtained certifications for Web3 development.
        </div>
        <div className="col-span-4 p-4 flex items-center justify-center rounded-lg">
          <Image
            alt="profile-picture"
            src="/indoors-picture.jpg "
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="col-span-12 font-body text-emerald-300 text-3xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
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
