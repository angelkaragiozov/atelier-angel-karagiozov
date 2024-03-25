import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import DynamicPlaiceholderBlur from "./CoverBlur";
import { Project } from "@/sanity/lib/utils";

interface Prop {
  project: Project;
}

const Cover = async ({ project }: Prop) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="border-b border-solid border-dark dark:border-gray ">
      <div className="tracking-wider px-4 border border-dotted border-dark dark:border-gray text-dark dark:text-gray bg-white dark:bg-black text-xl ml-4 mt-4 absolute outline-text z-30">
        <div>
          <h1>{project.title}</h1>
        </div>
      </div>

      <DynamicPlaiceholderBlur src={urlForImage(project.cover).url()} />
    </div>
  );
};

export default Cover;
