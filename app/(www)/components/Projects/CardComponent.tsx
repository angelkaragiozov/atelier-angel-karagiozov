import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { Project } from "@/sanity/lib/utils";

const CardComponent = async ({ project }: { project: Project }) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <div
        key={project._id}
        className="max-w-[520px] mx-auto border border-dotted border-dark dark:border-gray hover:border-solid hover:bg-white dark:hover:bg-blacks hover:text-dark dark:hover:text-gray p-3 transition-all ease-in-out duration-1000"
      >
        <Link href={`/d/projects/${project?.slug?.current}`}>
          <div className="flex justify-between h-8">
            <div className="text-xl text-blue dark:text-yellow lowercase w-20 pl-2">
              {project?.title}
            </div>
            <p className={`text-xs text-center text-gray dark:text-dark`}>
              {new Date(project?.publishedAt).toDateString()}
            </p>
          </div>

          <div className="fadein-animation">
            <Image
              src={urlForImage(project.cover).url()}
              width={500}
              height={200}
              alt="projects"
            />
          </div>
          <div className="h-20 mt-2 truncate">
            <p className=" mb-2 text-sm truncate">{project?.excerpt}</p>

            {/* TAGS */}

            {project?.tags?.map((tag) => (
              <span
                key={tag?._id}
                className=" mr-2 p-1 border text-xs border-dark dark:border-gray border-dotted text-2xs text-neutral dark:text-neutral lowercase"
              >
                #{tag?.name}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
