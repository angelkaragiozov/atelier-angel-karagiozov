import React from 'react'
import { urlForImage } from "@/sanity/lib/image";
import DynamicPlaiceholderBlur from "./CoverBlur";
import { Project } from '../../utils/interface';

interface Prop {
    project: Project;
  }


const Cover = ({ project }: Prop) => {
  return (
    <div className="border-b border-solid border-neutral ">
      <div className="bg-black mx-0 text-6xl md:text-6xl lg:text-[15rem] outline-text font-pixel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-[650px]">
          <h1>{project.title}</h1>
        </div>
      </div>

      <DynamicPlaiceholderBlur src={urlForImage(project.cover).url()} />
    </div>
  );
};

export default Cover

