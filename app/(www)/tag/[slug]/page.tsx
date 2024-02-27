import React from "react";
import { Project, Params } from "@/sanity/lib/utils"
import { getProjectsByTag } from "@/sanity/lib/utils";
import CardComponent from "../../components/Projects/CardComponent";

export const revalidate = 60;


const page = async ({ params }: Params) => {
  const project: Array<Project> = await getProjectsByTag(params.slug);
  console.log(project, "projects by tag");
  return (
    <div>
      <h2 className="text-center"> <div id={params.name}></div> </h2>
      <div>
        {project?.length > 0 && project?.map((project) => (
          <CardComponent key={project?._id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default page;
