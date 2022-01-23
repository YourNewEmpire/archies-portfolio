import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { GraphQLClient, gql } from "graphql-request";
import { IProject } from "../../interfaces/projects";
import projItems from "../../lib/content/projectItems"
const cmsURL = process.env.GRAPH_CMS;
const client = new GraphQLClient(cmsURL ? cmsURL : "");

const Project = ({ project }: { project: IProject }) => {
  return (
    <div>
      <div className="grid grid-flow-row grid-cols-1 items-left justify-center">
        <div className="m-12">
          <h1 className="text-center text-xl md:text-4xl lg:text-5xl xl:text-8xl text-emerald-300 font-title">
            {project.projectName}
          </h1>
        </div>
        <div className=" m-12" id="description">
          <h1 className="text-left text-3xl lg:text-5xl xl:text-6xl text-emerald-300 font-title">
            Description
          </h1>
          <div className="h-1 w-full bg-emerald-500 rounded-sm"></div>
          <p className="text-sm lg:text-base xl:text-2xl text-emerald-300">
            {project.projectDescription}
          </p>
        </div>
        <div className=" m-12" id="features">
          <h1 className="text-left text-3xl lg:text-5xl xl:text-6xl text-emerald-300 font-title">
            Features
          </h1>
          <div className="h-1 w-full bg-emerald-500 rounded-sm"></div>
          <ul className="list-disc list-inside">
            {project.projectFeatures.map((feat, index) => (
              <li
                className="text-sm lg:text-base xl:text-2xl text-emerald-300"
                key={index}
              >
                {feat}
              </li>
            ))}
          </ul>
        </div>
        <div className=" m-12" id="tools">
          <h1 className="text-left text-3xl lg:text-5xl xl:text-6xl text-emerald-300 font-title">
            Tools
          </h1>
          <div className="h-1 w-full bg-emerald-500 rounded-sm"></div>
          <ul className="list-disc list-inside">
            {project.projectTools.map((tool, index) => (
              <li
                className="text-sm lg:text-base xl:text-2xl text-emerald-300"
                key={index}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <div className=" m-12" id="links">
          <h1 className="text-left text-3xl lg:text-5xl xl:text-6xl text-emerald-300 font-title">
            Related links
          </h1>
          <div className="h-1 w-full bg-emerald-500 rounded-sm"></div>
          <ul className="list-disc list-inside break-words">
            {project.projectURLs.map((url, index) => (
              <li
                key={index}
                className="text-sm lg:text-base xl:text-2xl text-emerald-300 hover:underline"
              >
                <a target="blank" rel="noopener noreferrer" href={url}>
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed top-16 right-16">
        <ul className=" text-lg text-white space-y-2">
          <h1 className="font-bold text-emerald-300 ">On This Page</h1>
          {projItems.map((item, index) =>
          <li key={index}>
            <a className="hover:text-emerald-300"  href={ "#" + item}>{item}</a>
          </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Project;

//* Secondly, get info about each path.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  //@ts-ignore
  const slug = params.slug as string;
  const query = gql`
    query Artist($slug: String!) {
      project(where: { projectSlug: $slug }) {
        projectSlug
        projectName
        projectDescription
        projectFeatures
        projectTools
        projectTags
        projectURLs
      }
    }
  `;

  //* fetch content from graphcms.
  const data: { project: IProject | null } = await client.request(query, {
    slug,
  });

  if (!data.project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project: data.project },
    revalidate: 60 * 60,
  };
};

//* Firstly, make a path for each project
export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Projects {
      projects {
        projectSlug
      }
    }
  `;

  const data = await client.request(query);

  return {
    paths: data.projects.map((project: IProject) => ({
      params: { slug: project.projectSlug },
    })),
    fallback: "blocking",
  };
};
