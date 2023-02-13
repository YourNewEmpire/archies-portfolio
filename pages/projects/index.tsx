import { GetServerSideProps } from "next";
import { GraphQLClient, gql } from "graphql-request";
import { IProject } from "../../interfaces/projects";
import MoreDetails from "../../components/Buttons/MoreDetails";

export const getServerSideProps: GetServerSideProps = async () => {
  const cmsURL = process.env.GRAPH_CMS;
  const client = new GraphQLClient(cmsURL ? cmsURL : "");
  const query = gql`
    query MyQuery {
      projects(orderBy: createdAt_DESC, stage: PUBLISHED) {
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
  const data = await client.request(query);

  return {
    props: { projects: data.projects },
  };
};

const Projects = ({ projects }: { projects: IProject[] }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-12">
        <h1 className="text-center text-xl md:text-4xl lg:text-5xl xl:text-8xl text-emerald-300 font-title">
          My Projects
        </h1>
      </div>

      <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-12 ">
        {projects.map((proj, index) => (
          <div className="" key={index}>
            <h1 className="text-left text-3xl lg:text-5xl xl:text-6xl text-emerald-300 font-title">
              {proj.projectName}
            </h1>
            <div className="h-1 w-full bg-emerald-500 rounded-sm"></div>
            <p className="my-4 text-lg text-emerald-300 ">
              {proj.projectDescription}
            </p>
            <div className=" my-4 flex flex-row space-x-2 justify-start items-center max-w-fit text-sm">
              {proj.projectTags.map((item, index) => (
                <div
                  className="rounded-lg ring-2 ring-emerald-300 text-emerald-300 bg-slate-700 p-1"
                  key={index}
                >
                  #{item}
                </div>
              ))}
            </div>
            <MoreDetails href={`/projects/${proj.projectSlug}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
