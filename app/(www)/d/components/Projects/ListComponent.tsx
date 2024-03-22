import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { Project } from "@/sanity/lib/utils";
import { MotionDiv } from "../Motion/MotionDiv";
import PlayInView from "../Motion/PlayInView";
import Lazy from "../Motion/Lazy";

const ListComponent = async ({ project }: { project: Project }) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <Lazy>
        <PlayInView>
          <MotionDiv
            initial={{
              opacity: 0.5,
              scale: 0.9, // Initial scale for elastic effect
            }}
            animate={{
              opacity: 1,
              scale: 1, // Return to normal scale
            }}
            transition={{
              delay: project.index * 0.2,
              duration: 0.2,
              ease: "linear",
              type: "spring", // Apply spring physics
              stiffness: 250, // Adjust stiffness as needed
            }}
          >
            <div className="p-2 pt-0.5 border border-dotted border-dark dark:border-gray text-black dark:text-light hover:text-blacks dark:hover:text-white hover:border-solid hover:bg-white bg-light dark:bg-black dark:hover:bg-blacks h-[88px] transition-all ease-in-out duration-1000">
              <Link href={`d/projects/${project?.slug?.current}`}>
                <div className="flex justify-between">
                  <h2 className="text-sm text-blue dark:text-yellow">
                    {project?.title}
                  </h2>

                  <p className={`text-2xs text-neutral col-span-2`}>
                    {new Date(project?.publishedAt).toDateString()}
                  </p>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                  <div className="grayscale w-28 hover:grayscale-0 row-span-3">
                    <Image
                      src={urlForImage(project.cover).url()}
                      width={100}
                      height={56}
                      alt="projects"
                    />
                  </div>
                  <div className="col-span-2 truncate">
                    <p className="text-2xs truncate">{project?.excerpt}</p>
                  </div>

                  {/* TAGS */}

                  <div className="row-span-2 col-span-2 ">
                    {project?.tags?.map((tag) => (
                      <span
                        key={tag?._id}
                        className="mr-2 p-1 border border-dark dark:border-gray border-dotted text-2xs text-neutral dark:text-neutral lowercase"
                      >
                        #{tag?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </MotionDiv>
        </PlayInView>
      </Lazy>
    </div>
  );
};

export default ListComponent;
