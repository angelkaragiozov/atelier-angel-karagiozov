import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { Project } from "@/sanity/lib/utils";
import { MotionDiv } from "../Motion/MotionDiv";

const ListComponent = async ({ project }: { project: Project }) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <MotionDiv
        initial={{
          opacity: "0.3",
        }}
        animate={{
          opacity: "1",
        }}
        transition={{
          delay: project.index * 0.1,
          ease: "easeInOut",
          duration: 0.2,
        }}
        viewport={{ amount: 0 }}
      >
        <div className="p-2 pt-0.5 border border-dotted border-neutral  hover:text-dark dark:hover:text-gray hover:border-solid hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-[88px] transition-all ease-in-out duration-1000">
          <Link href={`/projects/${project?.slug?.current}`}>
            <div className="flex justify-between">
              <h2 className="text-sm text-blue dark:text-yellow">
                {project?.title}
              </h2>

              <p className={`text-2xs text-gray dark:text-dark col-span-2`}>
                {new Date(project?.publishedAt).toDateString()}
              </p>
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="grayscale w-28 hover:grayscale-0 row-span-3">
                <Image
                  src={urlForImage(project.cover).url()}
                  width={100}
                  height={70}
                  alt="projects"
                />
              </div>
            </div>
          </Link>
        </div>
      </MotionDiv>
    </div>
  );
};

export default ListComponent;
